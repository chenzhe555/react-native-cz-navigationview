
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
        // iPhone X、XR、XS、XS Max  有安全区域的
        BOOL isHaveSafeArea = NO;
        if (@available(iOS 11.0, *)) {
            isHaveSafeArea = [[[[UIApplication sharedApplication] delegate] window] safeAreaInsets].bottom > 0;
        }
        callback(@[@(isHaveSafeArea ? 22 : 0)]);
    });
}
@end
  
