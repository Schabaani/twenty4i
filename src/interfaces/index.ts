import {RootStackParamList} from '../navigations/router-prop';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {StackNavigationProp} from '@react-navigation/stack';
import {RouteProp} from '@react-navigation/native';

type THomeScreen = {
  navigation: NativeStackNavigationProp<RootStackParamList, 'HomeScreen'>;
};

type TDetailScreen = {
  navigation: StackNavigationProp<RootStackParamList, 'DetailScreen'>;
  route: RouteProp<RootStackParamList, 'DetailScreen'>;
};

type TGenres =
  | 'Comedy'
  | 'Fantasy'
  | 'Music'
  | 'Crime'
  | 'Drama'
  | 'Adventure'
  | 'History'
  | 'Thriller'
  | 'Animation'
  | 'Family'
  | 'Mystery'
  | 'Sci-Fi'
  | 'Biography'
  | 'Romance'
  | 'War'
  | 'Fantasy';

type TMovie = {
  id: number;
  title: string;
  year: string;
  duration: string;
  genres: TGenres[];
  director: string;
  actors: string;
  plot: string;
  posterUrl: string;
};

type TCarousel = {
  title: string;
  items: TMovie[];
};

type TNav = {
  navigate: (value: string, params?: Object) => void;
};

export {THomeScreen, TDetailScreen, TCarousel, TMovie, TGenres, TNav};
