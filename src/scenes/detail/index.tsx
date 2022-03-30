import React from 'react';
import {ImageBackground, SafeAreaView, Text} from 'react-native';
import {TDetailScreen} from '../../interfaces';
import {Style} from './styles';

const DetailScreen = (props: TDetailScreen) => {
  return (
    <SafeAreaView style={Style.container}>
      <ImageBackground
        source={{
          uri: props.route.params?.posterUrl,
        }}
        resizeMode="cover"
        style={Style.imageBackground}>
        <Text style={Style.title}>{props.route.params?.title}</Text>
      </ImageBackground>
      <Text style={Style.plot}>{props.route.params?.plot}</Text>
    </SafeAreaView>
  );
};

export default DetailScreen;
