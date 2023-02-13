import React from 'react';
import {
  NativeMethods,
  NativeSyntheticEvent,
  Platform,
  UIManager,
} from 'react-native';
import { View } from 'react-native';
import { findNodeHandle } from 'react-native';
import { requireNativeComponent, ViewProps } from 'react-native';
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

// export type NativeProps = Omit<
//   MiaopasiRnMapViewProps,
//   'onRegionChange' | 'onRegionChangeComplete'
// > & {
//   handlePanDrag?: boolean;
//   onChange?: (e: ChangeEvent) => void;
// };

type State = {
  isReady: boolean;
};

const MiaopasiRnCard =
  requireNativeComponent<MiaopasiRnMapViewProps>('MiaopasiRnCard');

export class MiaopasiRnMapView extends React.Component<
  MiaopasiRnMapViewProps,
  State
> {
  //   scrollableTabRef = React.createRef<LegacyRef<View> | undefined>();

  constructor(props: MiaopasiRnMapViewProps) {
    super(props);
    this.state = {
      isReady: Platform.OS === 'ios',
    };

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
    // this.mapRef?.setNativeProps(props);
  }

  private _onMapReady() {
    if (this.props.onMapReady) {
      this.props.onMapReady();
    }
  }

  private _onChange({ nativeEvent }: ChangeEvent) {
    if (nativeEvent.continuous) {
      if (this.props.onRegionChange) {
        this.props.onRegionChange(nativeEvent.region);
      }
    } else if (this.props.onRegionChangeComplete) {
      this.props.onRegionChangeComplete(nativeEvent.region);
    }
  }

  animateToRegion(region: Region, duration: number = 500) {
    // if (this.mapRef) {
    //   Commands.animateToRegion(this.mapRef.current, region, duration);
    // }
    // UIManager.dispatchViewManagerCommand(null, 'animateToRegion', [region]);
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
    return (
      //   <View ref={this.scrollableTabRef}></View>
      <MiaopasiRnCard
        //   ref={this.scrollableTabRef}
        // onMapReady={this.props.onMapReady}
        // onRegionChange={(region: Region) => {
        //   if (this.props.onRegionChange) {
        //     this.props.onRegionChange(region);
        //   }
        // }}
        {...this.props}
      ></MiaopasiRnCard>
    );
  }
}
