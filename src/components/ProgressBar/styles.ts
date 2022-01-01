import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    borderColor: COLORS.shuttleGray,
    borderWidth: 4,
    borderRadius: 25,
    width: '65%',
    height: 15,
    backgroundColor: COLORS.shuttleGray,
  },
  progress: {
    backgroundColor: COLORS.turquoise,
    height: 7,
    borderRadius: 25,
  },
});
