import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  questionText: {
    fontSize: 18,
    color: COLORS.white,
    fontWeight: '700',
    marginHorizontal: 3,
  },
  filledOptionContainer: {
    padding: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
  },
  rightOptionContainer: {
    backgroundColor: COLORS.turquoise,
  },
  wrongOptionContainer: {
    backgroundColor: COLORS.cinnabar,
  },
  filledOptionText: {
    color: COLORS.shuttleGray,
    fontWeight: '700',
    fontSize: 18,
  },
  secondaryFilledOptionText: {
    color: COLORS.white,
  },
});
