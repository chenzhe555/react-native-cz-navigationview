
#import "RNCzNavigationview.h"

@implementation RNCzNavigationview

- (dispatch_queue_t)methodQueue
{
    return dispatch_get_main_queue();
}
RCT_EXPORT_MODULE()
RCT_EXPORT_METHOD(getTopSpace:(RCTResponseSenderBlock)callback)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        //目前只有iPhoneX
        BOOL isHaveSafeArea = NO;
        if (@available(iOS 11.0, *)) {
            isHaveSafeArea = [[[[UIApplication sharedApplication] delegate] window] safeAreaInsets].bottom > 0;
        }
        callback(@[@(isIPhoneX ? 22 : 0)]);
    });
}
@end
  
