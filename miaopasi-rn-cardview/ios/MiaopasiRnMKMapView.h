//
//  MiaopasiRnMKMapView.h
//  miaopasi-rn-cardview
//
//  Created by zhuyuhui on 2023/2/12.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>
NS_ASSUME_NONNULL_BEGIN

extern const CLLocationDegrees MiaopasiRnMapDefaultSpan;
extern const NSTimeInterval MiaopasiRnMapRegionChangeObserveInterval;
extern const CGFloat MiaopasiRnMapZoomBoundBuffer;
extern const NSInteger MiaopasiRnMapMaxZoomLevel;


@interface MiaopasiRnMKMapView : MKMapView
@property (nonatomic, assign) BOOL hasStartedRendering;
@property (nonatomic, assign) CGFloat minDelta;
@property (nonatomic, assign) CGFloat maxDelta;
@property (nonatomic, assign) MKCoordinateRegion initialRegion;

@property (nonatomic, assign) BOOL ignoreRegionChanges;
@property (nonatomic, copy) RCTBubblingEventBlock onMapReady;
@property (nonatomic, copy) RCTBubblingEventBlock onChange;
@property (nonatomic, copy) RCTBubblingEventBlock onPress;
@property (nonatomic, copy) RCTBubblingEventBlock onPanDrag;
@property (nonatomic, copy) RCTBubblingEventBlock onDoublePress;
@property (nonatomic, copy) RCTBubblingEventBlock onLongPress;

@end

NS_ASSUME_NONNULL_END
