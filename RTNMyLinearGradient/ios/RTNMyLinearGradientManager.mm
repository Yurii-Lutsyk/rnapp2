#import <React/RCTLog.h>
#import <React/RCTUIManager.h>
#import <React/RCTViewManager.h>

@interface RTNMyLinearGradientManager : RCTViewManager
@end

@implementation RTNMyLinearGradientManager

RCT_EXPORT_MODULE(RTNMyLinearGradient)

RCT_EXPORT_VIEW_PROPERTY(color, NSArray)

@end