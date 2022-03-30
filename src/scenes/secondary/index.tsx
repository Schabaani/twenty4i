import React from 'react';
import {SafeAreaView} from 'react-native';
import {TSecondaryScreen} from '../../interfaces';
import {Style} from './styles';

const SecondaryScreen = (props: TSecondaryScreen) => {
  return <SafeAreaView style={Style.container}></SafeAreaView>;
};

export default SecondaryScreen;
