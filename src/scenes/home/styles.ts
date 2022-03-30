import {StyleSheet} from 'react-native';
import {Colors, Spacing, FontSize} from '../../styles/';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
  },
  carContainer: {
    width: '100%',
    marginBottom: Spacing.x4,
    marginHorizontal: Spacing.x1,
  },
  empty: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: FontSize.x3,
  },
});
