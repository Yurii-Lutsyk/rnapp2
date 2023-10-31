#import "RTNMyLocationSpec.h"
#import "RTNMyLocation.h"

@implementation RTNMyLocation

RCT_EXPORT_MODULE()

- (void)getLocation:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject{
    dispatch_async(dispatch_get_main_queue(), ^{
        self.locationManager = [[CLLocationManager alloc] init];
        self.locationManager.delegate = self;
        if ([self.locationManager respondsToSelector:@selector(requestWhenInUseAuthorization)]) {
            [self.locationManager requestWhenInUseAuthorization];
        }
        [self.locationManager startUpdatingLocation];
    });
}

- (void)askLocationPermissionForAndroid:(RCTPromiseResolveBlock)resolve reject:(RCTPromiseRejectBlock)reject {
    resolve ({});
}

- (void)locationManager:(CLLocationManager *)manager didUpdateLocations:(NSArray *)locations
{
    //The user accepted authorization
    CLLocation *location = [locations lastObject];
    NSDictionary* body = @{@"latitude" : [NSString stringWithFormat:@"%f", location.coordinate.latitude],@"longitude" : [NSString stringWithFormat:@"%f", location.coordinate.longitude]};
    [EventEmitter.shared sendEventWithName:@"onMyEvent" body:body];
}

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
(const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeMyLocationSpecJSI>(params);
}

@end