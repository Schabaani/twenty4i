import {RootStackParamList} from '../navigations/router-prop';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type TPrimaryScreen = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'PrimaryScreen'>;
};

type TSecondaryScreen = {
  navigation: StackNavigationProp<RootStackParamList, 'SecondaryScreen'>;
  route: RouteProp<RootStackParamList, 'SecondaryScreen'>;
};

export {TPrimaryScreen, TSecondaryScreen};
