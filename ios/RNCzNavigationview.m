
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
        //目前只有iPhoneX，先就这样吧,本来应该是88-64=24的,但是感觉18好看点
        BOOL isIPhoneX = [UIScreen instancesRespondToSelector:@selector(currentMode)] ? CGSizeEqualToSize(CGSizeMake(1125, 2436), [[UIScreen mainScreen] currentMode].size) : NO;
        callback(@[@(isIPhoneX ? 16 : 0)]);
    });
}
@end
  
