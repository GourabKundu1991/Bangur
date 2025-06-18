#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "DetectFrida.h"
#import "JailBrokenHelper.h"

FOUNDATION_EXPORT double react_native_detect_fridaVersionNumber;
FOUNDATION_EXPORT const unsigned char react_native_detect_fridaVersionString[];

