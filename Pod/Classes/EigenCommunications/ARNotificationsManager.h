#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

@interface ARNotificationsManager : RCTEventEmitter <RCTBridgeModule>
- (void)notifySearchButtonTap;
@end
