import React from 'react';
import {SafeAreaView} from 'react-native';
import {TPrimaryScreen} from '../../interfaces';
import {Style} from './styles';

export default function PrimaryScreen({navigation}: TPrimaryScreen) {
  return <SafeAreaView style={Style.container}></SafeAreaView>;
}
