import type { NativeSyntheticEvent } from 'react-native';

export type LatLng = {
  latitude: number;
  longitude: number;
};

export type Point = {
  x: number;
  y: number;
};

export type Region = LatLng & {
  latitudeDelta: number;
  longitudeDelta: number;
};

export type ChangeEvent = NativeSyntheticEvent<{
  continuous: boolean;
  region: Region;
  isGesture?: boolean;
}>;

export type ClickEvent<T = {}> = NativeSyntheticEvent<
  { coordinate: LatLng; position: Point } & T
>;

export type PanDragEvent = ClickEvent;

export type LongPressEvent = ClickEvent<{
  /**
   * @platform Android
   */
  action?: 'long-press';
}>;

export type MapPressEvent = ClickEvent<{
  /**
   * @platform Android
   */
  action?: 'press' | 'marker-press';
}>;
