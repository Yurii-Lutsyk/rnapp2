import type {ViewProps, HostComponent} from 'react-native';
import {DirectEventHandler} from 'react-native/Libraries/Types/CodegenTypes';
import codegenNativeComponent from 'react-native/Libraries/Utilities/codegenNativeComponent';

type Event = Readonly<{
  value: string;
}>;

export interface NativeProps extends ViewProps {
  onQrScanned?: DirectEventHandler<Event>;
}

export default codegenNativeComponent<NativeProps>(
  'RTNScanQr',
) as HostComponent<NativeProps>;
