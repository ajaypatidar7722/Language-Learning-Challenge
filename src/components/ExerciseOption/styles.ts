import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  optionContainer: {
    borderRadius: 10,
    flexGrow: 1,
    flexBasis: '45%',
    padding: 10,
    margin: 5,
    backgroundColor: COLORS.white,
  },
  disabledOptionContainer: {
    backgroundColor: COLORS.regentGray,
  },
  optionText: {
    color: COLORS.shuttleGray,
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
  },
  selectedOption: {
    backgroundColor: COLORS.pickledBluewood,
  },
  selectedOptionText: {
    color: COLORS.pickledBluewood,
  },
});
