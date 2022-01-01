import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 25,
  },
  success: {
    backgroundColor: COLORS.turquoise,
  },
  wrong: {
    backgroundColor: COLORS.cinnabar,
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
    color: COLORS.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
