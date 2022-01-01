import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 25,
  },
  success: {
    backgroundColor: colors.turquoise,
  },
  wrong: {
    backgroundColor: colors.cinnabar,
  },
  notSelect: {
    backgroundColor: 'transparent',
  },
  statusContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
