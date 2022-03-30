import {StyleSheet} from 'react-native';
import {Colors, Spacing, FontSize} from '../../styles/';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_GREY,
  },
  imageBackground: {
    height: 300,
    width: '100%',
    justifyContent: 'flex-end',
  },
  title: {
    color: Colors.ORANGE,
    backgroundColor: Colors.BLACK,
    padding: Spacing.x1,
    fontSize: FontSize.x2,
  },
  plot: {margin: Spacing.x1, fontSize: FontSize.x2},
});
