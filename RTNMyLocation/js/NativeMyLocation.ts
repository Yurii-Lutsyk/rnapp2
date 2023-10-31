import {TurboModule, TurboModuleRegistry} from 'react-native';

export interface Spec extends TurboModule {
  getLocation(): Promise<void>;
  askLocationPermissionForAndroid(): Promise<void>;
}

export default TurboModuleRegistry.get<Spec>('RTNMyLocation') as Spec | null;