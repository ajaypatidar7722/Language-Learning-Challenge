import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { ANSWER_TYPES } from '../../constants/answerTypes';
import { COLORS } from '../../constants/colors';

type ExerciseButtonContainerProps = {
  children: any;
  answerType: string;
  description: string;
};

const ExerciseButtonContainer = ({
  children,
  answerType,
  description,
}: ExerciseButtonContainerProps) => {
  const isWrongAnswer = answerType === ANSWER_TYPES.WRONG;
  const isRightAnswer = answerType === ANSWER_TYPES.RIGHT;
  const isOptionSelected = !isWrongAnswer && !isRightAnswer;

  return (
    <View
      style={[
        styles.root,
        isWrongAnswer && styles.wrong,
        isRightAnswer && styles.success,
        isOptionSelected && styles.notSelect,
      ]}
    >
      {!isOptionSelected && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusText}>{description}</Text>
          <FontAwesome name="flag" size={24} color={COLORS.white} />
        </View>
      )}
      {children}
    </View>
  );
};

export default ExerciseButtonContainer;
