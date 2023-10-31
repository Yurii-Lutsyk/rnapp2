import {HostComponent, ViewProps} from 'react-native';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

export interface NativeProps extends ViewProps {
  color: ReadonlyArray<string>;
}

export default codegenNativeComponent<NativeProps>(
  'RTNMyLinearGradient',
) as HostComponent<NativeProps>;
