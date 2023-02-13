import React from 'react';

import {
  NativeSyntheticEvent,
  requireNativeComponent,
  UIManager,
  ViewProps,
  findNodeHandle,
} from 'react-native';

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

/*
omit函数的作用:将第一个参数中包含第二个参数的全部去掉，即只保留第一个参数中不包含第二个
参数的其他数据;
这里我们将 'onRegionChange' 和 'onRegionChangeComplete' 函数去掉，注意，这里的去掉指的是
不向 MiaopasiRnCard 组件传递这两个值，而 MiaopasiRnMapView 组件的props中仍含有这两个入参。
这样做是因为，MiaopasiRnCard 组件由原生传给JS的参数比较繁杂，我们这里处理一下，只拿我们需要的参数
*/
export type NativeProps = Omit<
  MiaopasiRnMapViewProps,
  'onRegionChange' | 'onRegionChangeComplete'
> & {
  onChange?: (e: ChangeEvent) => void;
};

const MiaopasiRnCard =
  requireNativeComponent<MiaopasiRnMapViewProps>('MiaopasiRnCard');

/// 这里参数类型应该为：MiaopasiRnMapViewProps
export class MiaopasiRnMapView extends React.Component<MiaopasiRnMapViewProps> {
  viewRef?: React.ElementRef<typeof MiaopasiRnCard>;

  constructor(props: MiaopasiRnMapViewProps) {
    super(props);
  }

  animateToRegion(region: Region, duration: number = 500) {
    UIManager.dispatchViewManagerCommand(
      findNodeHandle(this),
      UIManager.getViewManagerConfig('MiaopasiRnCard').Commands
        .animateToRegion!,
      [region, duration]
    );
  }

  private _onMapReady = () => {
    if (this.props.onMapReady) {
      this.props.onMapReady();
    }
  };

  private _onChange = ({ nativeEvent }: ChangeEvent) => {
    if (nativeEvent.continuous) {
      if (this.props.onRegionChange) {
        this.props.onRegionChange(nativeEvent.region);
      }
    } else if (this.props.onRegionChangeComplete) {
      this.props.onRegionChangeComplete(nativeEvent.region);
    }
  };

  render() {
    /// 这里参数类型应该为: NativeProps
    let props: NativeProps;
    props = {
      onChange: this._onChange,
      onMapReady: this._onMapReady,
      ...this.props,
    };

    return (
      <MiaopasiRnCard
        ref={(ref: React.ElementRef<typeof MiaopasiRnCard>) =>
          (this.viewRef = ref)
        }
        {...props}
      ></MiaopasiRnCard>
    );
  }
}
