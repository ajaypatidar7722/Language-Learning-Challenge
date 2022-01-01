import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    borderColor: colors.shuttleGray,
    borderWidth: 4,
    borderRadius: 25,
    width: '65%',
    height: 15,
    backgroundColor: colors.shuttleGray,
  },
  progress: {
    backgroundColor: colors.turquoise,
    height: 7,
    borderRadius: 25,
  },
});
