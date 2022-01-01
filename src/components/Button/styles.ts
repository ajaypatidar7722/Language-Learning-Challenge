import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    width: '100%',
    borderRadius: 25,
    backgroundColor: colors.turquoise,
    padding: 12,
    marginVertical: 15,
  },
  disableButton: {
    backgroundColor: colors.pickledBluewood,
  },
  successButton: {
    backgroundColor: colors.white,
  },
  errorButton: {
    backgroundColor: colors.white,
  },
  title: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.white,
    textTransform: 'uppercase',
  },
  successTitle: {
    color: colors.turquoise,
  },
  errorTitle: {
    color: colors.cinnabar,
  },
});
