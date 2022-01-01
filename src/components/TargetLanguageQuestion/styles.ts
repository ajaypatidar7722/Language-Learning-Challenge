import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  questionText: {
    fontSize: 18,
    color: colors.white,
    fontWeight: '700',
    marginHorizontal: 3,
  },
  filledOptionContainer: {
    padding: 10,
    backgroundColor: colors.white,
    borderRadius: 10,
  },
  rightOptionContainer: {
    backgroundColor: colors.turquoise,
  },
  wrongOptionContainer: {
    backgroundColor: colors.cinnabar,
  },
  filledOptionText: {
    color: colors.shuttleGray,
    fontWeight: '700',
    fontSize: 18,
  },
  secondaryFilledOptionText: {
    color: colors.white,
  },
});
