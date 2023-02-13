import type { HostComponent } from 'react-native';
import codegenNativeCommands from 'react-native/Libraries/Utilities/codegenNativeCommands';
import type { MiaopasiRnMapViewProps } from './MiaopasiRnMapView';
import type { Region } from './sharedTypes';
export type MapViewNativeComponentType = HostComponent<MiaopasiRnMapViewProps>;

interface NativeCommands {
  animateToRegion: (
    viewRef: NonNullable<
      React.RefObject<MapViewNativeComponentType>['current']
    >,
    region: Region,
    duration: number
  ) => void;

  //   fitToElements: (
  //     viewRef: NonNullable<
  //       React.RefObject<MapViewNativeComponentType>['current']
  //     >,
  //     edgePadding: EdgePadding,
  //     animated: boolean
  //   ) => void;

  //   fitToSuppliedMarkers: (
  //     viewRef: NonNullable<
  //       React.RefObject<MapViewNativeComponentType>['current']
  //     >,
  //     markers: string[],
  //     edgePadding: EdgePadding,
  //     animated: boolean
  //   ) => void;

  //   fitToCoordinates: (
  //     viewRef: NonNullable<
  //       React.RefObject<MapViewNativeComponentType>['current']
  //     >,
  //     coordinates: LatLng[],
  //     edgePadding: EdgePadding,
  //     animated: boolean
  //   ) => void;

  //   setMapBoundaries: (
  //     viewRef: NonNullable<
  //       React.RefObject<MapViewNativeComponentType>['current']
  //     >,
  //     northEast: LatLng,
  //     southWest: LatLng
  //   ) => void;

  //   setIndoorActiveLevelIndex: (
  //     viewRef: NonNullable<
  //       React.RefObject<MapViewNativeComponentType>['current']
  //     >,
  //     activeLevelIndex: number
  //   ) => void;
}

export const Commands: NativeCommands = codegenNativeCommands<NativeCommands>({
  supportedCommands: [
    'animateToRegion',
    // 'setCamera',
    // 'animateCamera',
    // 'fitToElements',
    // 'fitToSuppliedMarkers',
    // 'fitToCoordinates',
    // 'setMapBoundaries',
    // 'setIndoorActiveLevelIndex',
  ],
});
