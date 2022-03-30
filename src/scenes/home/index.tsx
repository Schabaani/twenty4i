import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  FlatList,
  Text,
  ActivityIndicator,
  View,
} from 'react-native';
import {THomeScreen} from '../../interfaces';
import {fetchMovies} from '../../services/api/movies';
import {Carousel} from '../../components/';
import {Style} from './styles';

export default function HomeScreen({navigation}: THomeScreen) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const loadMovies = async () => {
      const {error, carousels} = await fetchMovies();
      setLoading(false);
      if (!error) {
        setMovies(carousels);
      } else {
        // show a toast
      }
    };
    loadMovies();
  }, []);
  const renderItem = ({item}) => {
    return <Carousel {...item} />;
  };
  return (
    <SafeAreaView style={Style.container}>
      {loading && <ActivityIndicator size="large" />}
      {!loading && (
        <FlatList
          data={movies}
          renderItem={renderItem}
          style={{width: '100%'}}
          ListEmptyComponent={() => {
            return (
              <View style={Style.empty}>
                <Text style={Style.emptyText}>No Movies</Text>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}
