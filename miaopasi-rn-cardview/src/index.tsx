import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'miaopasi-rn-cardview' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type MiaopasiRnCardProps = {
  color?: string;
  style?: ViewStyle;
  children?: React.ReactNode;
};

const ComponentName = 'MiaopasiRnCard';

export const MiaopasiRnCard =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<MiaopasiRnCardProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
