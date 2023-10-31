#import <RTNMyLocationSpec/RTNMyLocationSpec.h>
#import <CoreLocation/CoreLocation.h>
#import "EventEmitter.h"

NS_ASSUME_NONNULL_BEGIN

@interface RTNMyLocation : NSObject <NativeMyLocationSpec, CLLocationManagerDelegate>
@property (nonatomic,strong) CLLocationManager *locationManager;
@end

NS_ASSUME_NONNULL_END