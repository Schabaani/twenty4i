export type InitStackParamList = {
  DeveloperScreen: undefined;
  InitApp?: {devMode?: 'DEVELOPMENT' | 'PRODUCTION'};
  AppNavigator: undefined;
};

export const RootStackRouteNames = ['HomeScreen', 'DetailScreen'];

export type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: {title: string; posterUrl: string; plot: string};
};
