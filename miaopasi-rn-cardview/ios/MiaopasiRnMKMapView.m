//
//  MiaopasiRnMKMapView.m
//  miaopasi-rn-cardview
//
//  Created by zhuyuhui on 2023/2/12.
//
#import <QuartzCore/QuartzCore.h>
#import "MiaopasiRnMKMapView.h"

const CLLocationDegrees MiaopasiRnMapDefaultSpan = 0.005;
const NSTimeInterval MiaopasiRnMapRegionChangeObserveInterval = 0.1;
const CGFloat MiaopasiRnMapZoomBoundBuffer = 0.01;
const NSInteger MiaopasiRnMapMaxZoomLevel = 20;

@interface MiaopasiRnMKMapView()

@end


@implementation MiaopasiRnMKMapView
{
    BOOL _initialRegionSet;
}

- (instancetype)init
{
    if ((self = [super init])) {
        _hasStartedRendering = NO;
    }
    return self;
}


- (void)setInitialRegion:(MKCoordinateRegion)initialRegion {
    if (!_initialRegionSet) {
        _initialRegionSet = YES;
        [self setRegion:initialRegion animated:NO];
    }
}



@end
