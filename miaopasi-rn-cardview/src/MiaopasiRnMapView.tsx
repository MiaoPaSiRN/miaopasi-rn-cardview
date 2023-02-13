import React from 'react';

import {
  NativeSyntheticEvent,
  requireNativeComponent,
  UIManager,
  View,
  ViewProps,
} from 'react-native';
import { Commands } from './MapViewNativeComponent';

import type {
  ChangeEvent,
  ClickEvent,
  LongPressEvent,
  MapPressEvent,
  PanDragEvent,
  Region,
} from './sharedTypes';

export type MiaopasiRnMapViewProps = ViewProps & {
  initialRegion?: Region | undefined | null;
  region?: Region | undefined | null;
  zoomEnabled?: boolean;
  onMapReady?: (event?: NativeSyntheticEvent<{}>) => void;
  onRegionChange?: (region: Region) => void;
  onRegionChangeComplete?: (region: Region) => void;
  onPress?: (event: MapPressEvent) => void;
  onPanDrag?: (event: PanDragEvent) => void;
  onDoublePress?: (event: ClickEvent) => void;
  onLongPress?: (event: LongPressEvent) => void;
};

// type NativeProps = MiaopasiRnMapViewProps & { ref: React.RefObject<View> };

// export type NativeProps = Omit<
//   MiaopasiRnMapViewProps,
//   'onRegionChange' | 'onRegionChangeComplete'
// > & {
//   handlePanDrag?: boolean;
//   onChange?: (e: ChangeEvent) => void;
// };

// type State = {
//   isReady: boolean;
// };

const MiaopasiRnCard =
  requireNativeComponent<MiaopasiRnMapViewProps>('MiaopasiRnCard');

export class MiaopasiRnMapView extends React.Component<MiaopasiRnMapViewProps> {
  //   scrollableTabRef = React.createRef<LegacyRef<View> | undefined>();
  private circle: React.RefObject<View>;

  constructor(props: MiaopasiRnMapViewProps) {
    super(props);
    this.circle = React.createRef<View>();

    // this.state = {
    //   isReady: Platform.OS === 'ios',
    // };

    // this._onMapReady = this._onMapReady.bind(this);
    // this._onChange = this._onChange.bind(this);
  }

  /**
   * @deprecated Will be removed in v2.0.0, as setNativeProps is not a thing in fabric.
   * See https://reactnative.dev/docs/new-architecture-library-intro#migrating-off-setnativeprops
   */
  setNativeProps(props: Partial<MiaopasiRnMapViewProps>) {
    console.warn(
      'setNativeProps is deprecated and will be removed in next major release'
    );
    // this.circle.setNativeProps(props);
  }

  animateToRegion(region: Region, duration: number = 500) {
    console.log('animateToRegion:', region);
    console.log('animateToRegion:', this.circle);

    // if (this.circle) {
    //   Commands.animateToRegion(this.circle.current, region, duration);
    // }
    // UIManager.dispatchViewManagerCommand(this.circle.current, 'animateToRegion', [region]);
    // UIManager.dispatchViewManagerCommand(
    //   null,
    //   UIManager.getViewManagerConfig('MiaopasiRnCard').Commands
    //     .callNativeMethod,
    //   []
    // );
  }

  //   callNativeMethod = () => {
  //     UIManager.dispatchViewManagerCommand(
  //       ReactNative.findNodeHandle(this),
  //       UIManager.getViewManagerConfig('RNCMyNativeView').Commands
  //         .callNativeMethod,
  //       []
  //     );
  //   };

  render() {
    return <MiaopasiRnCard ref={this.circle} {...this.props}></MiaopasiRnCard>;
  }
}
