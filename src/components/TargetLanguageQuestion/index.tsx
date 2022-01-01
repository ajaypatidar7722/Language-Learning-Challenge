import React from 'react';
import { Text, View } from 'react-native';

import { answerTypes } from '../../constants/answerTypes';
import { styles } from './styles';

type TargetLanguageQuestionProps = {
  questionWords: string[];
  selectedOption: string;
  answerType: string;
};

const TargetLanguageQuestion = ({
  questionWords,
  selectedOption,
  answerType,
}: TargetLanguageQuestionProps) => {
  const isRightAnswer = answerType === answerTypes.RIGHT;
  const isWrongAnswer = answerType === answerTypes.WRONG;
  const isRightOrWrongAnswer = isRightAnswer || isWrongAnswer;

  return (
    <>
      {questionWords.map((questionWord: string, index: number) =>
        questionWord?.includes('_') ? (
          selectedOption ? (
            <View
              key={`${questionWord}+${index}`}
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
          )
        ) : (
          <Text style={styles.questionText}>{questionWord}</Text>
        )
      )}
    </>
  );
};

export default TargetLanguageQuestion;
