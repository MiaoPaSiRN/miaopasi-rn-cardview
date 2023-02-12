//
//  MiaopasiRnMKMapView.h
//  miaopasi-rn-cardview
//
//  Created by zhuyuhui on 2023/2/12.
//

#import <MapKit/MapKit.h>
#import <React/RCTComponent.h>
NS_ASSUME_NONNULL_BEGIN

@interface MiaopasiRnMKMapView : MKMapView

@property (nonatomic, copy) RCTBubblingEventBlock onRegionChange;

@end

NS_ASSUME_NONNULL_END
