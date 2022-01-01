import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  questionText: {
    fontSize: 20,
    fontWeight: '500',
    color: colors.white,
    marginHorizontal: 3,
  },
  guessingText: { textDecorationLine: 'underline', fontWeight: '700' },
});
