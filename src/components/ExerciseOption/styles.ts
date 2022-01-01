import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  optionContainer: {
    borderRadius: 10,
    flexGrow: 1,
    flexBasis: '45%',
    padding: 10,
    margin: 5,
    backgroundColor: colors.white,
  },
  disabledOptionContainer: {
    backgroundColor: colors.regentGray,
  },
  optionText: {
    color: colors.shuttleGray,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: colors.pickledBluewood,
  },
  selectedOptionText: {
    color: colors.pickledBluewood,
  },
});
