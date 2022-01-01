import { StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';

export const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    fontWeight: '500',
    color: COLORS.white,
    marginHorizontal: 3,
  },
  guessingText: { textDecorationLine: 'underline', fontWeight: '700' },
});
