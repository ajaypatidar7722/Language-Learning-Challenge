import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

export const styles = StyleSheet.create({
  root: {
    height: '75%',
    width: '100%',
    position: 'absolute',
    bottom: 0,
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    backgroundColor: colors.shuttleGray,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  questionContainer: {
    padding: 30,
  },
  progressBarContainer: {
    height: '25%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
