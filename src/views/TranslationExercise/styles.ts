import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: { marginTop: 20, display: 'flex', alignItems: 'center' },
  headingText: {
    fontSize: 16,
    fontWeight: '400',
    color: colors.white,
    marginBottom: 20,
  },

  optionsContainer: {
    marginTop: 30,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  targetQuestionContainer: {
    marginTop: 45,
  },
});
