import React from 'react';
import { Text, View } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

import { styles } from './styles';
import { answerTypes } from '../../constants/answerTypes';
import { colors } from '../../constants/colors';

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
  const isWrongAnswer = answerType === answerTypes.WRONG;
  const isRightAnswer = answerType === answerTypes.RIGHT;
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
          <FontAwesome name="flag" size={24} color={colors.white} />
        </View>
      )}
      {children}
    </View>
  );
};

export default ExerciseButtonContainer;
