import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: COLORS.turquoise,
    padding: 12,
    marginVertical: 15,
  },
  disableButton: {
    backgroundColor: COLORS.pickledBluewood,
  },
  successButton: {
    backgroundColor: COLORS.white,
  },
  errorButton: {
    backgroundColor: COLORS.white,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: COLORS.white,
    textTransform: 'uppercase',
  },
  successTitle: {
    color: COLORS.turquoise,
  },
  errorTitle: {
    color: COLORS.cinnabar,
  },
});
