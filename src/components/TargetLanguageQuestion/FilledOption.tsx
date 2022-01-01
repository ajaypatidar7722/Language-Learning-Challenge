import React from 'react';
import { Text, View } from 'react-native';
import { ANSWER_TYPES } from '../../constants/answerTypes';

import { styles } from './styles';

type FilledOption = {
  selectedOption: string;
  answerType: string;
};

const FilledOption = ({ selectedOption, answerType }: FilledOption) => {
  const isRightAnswer = answerType === ANSWER_TYPES.RIGHT;
  const isWrongAnswer = answerType === ANSWER_TYPES.WRONG;
  const isRightOrWrongAnswer = isRightAnswer || isWrongAnswer;

  return (
    <>
      {selectedOption ? (
        <View
          style={[
            styles.filledOptionContainer,
            isRightAnswer && styles.rightOptionContainer,
            isWrongAnswer && styles.wrongOptionContainer,
          ]}
        >
          <Text
            style={[
              styles.filledOptionText,
              isRightOrWrongAnswer && styles.secondaryFilledOptionText,
            ]}
          >
            {selectedOption}
          </Text>
        </View>
      ) : (
        <Text style={styles.questionText}>________</Text>
      )}
    </>
  );
};

export default FilledOption;
