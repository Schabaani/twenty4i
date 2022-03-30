import React from 'react';
import {Text, FlatList, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {TCarousel, TMovie, TNav} from '../interfaces';
import {StyleSheet} from 'react-native';
import {Spacing, FontSize} from '../styles';

const WIDTH = 100;
const HEIGHT = 120;

export function Carousel(props: TCarousel) {
  return (
    <View style={Style.carouselContainer}>
      <Text style={Style.carouselTitle}>{props.title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={props.items}
        renderItem={({item}) => {
          return <MovieCard {...item} />;
        }}
      />
    </View>
  );
}

function MovieCard(props: TMovie) {
  const navigation = useNavigation<TNav>();
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('DetailScreen', {
          title: props.title,
          posterUrl: props.posterUrl,
          plot: props.plot,
        });
      }}
      style={Style.btn}>
      <Image
        source={{uri: props.posterUrl}}
        width={WIDTH}
        height={HEIGHT}
        style={Style.poster}
        resizeMode="cover"
      />
      <Text style={Style.movieTitle} numberOfLines={1}>
        {props.title}
      </Text>
    </TouchableOpacity>
  );
}

const Style = StyleSheet.create({
  carouselContainer: {
    width: '100%',
    marginBottom: Spacing.x4,
    marginHorizontal: Spacing.x1,
  },
  btn: {
    marginHorizontal: Spacing.x1,
  },
  movieTitle: {width: WIDTH},
  poster: {
    width: WIDTH,
    height: HEIGHT,
    marginBottom: Spacing.x1,
  },
  carouselTitle: {marginBottom: Spacing.x1, fontSize: FontSize.x2},
});
