import React from 'react';
import { Text } from 'react-native';

import { styles } from './styles';

type SourceLanguageQuestionProps = {
  questionWords: string[];
};

const SourceLanguageQuestion = ({
  questionWords,
}: SourceLanguageQuestionProps) => {
  return (
    <>
      {questionWords?.map((questionWord: string, index: number) => (
        <Text key={`${questionWord}+${index}`} style={styles.questionText}>
          {questionWord?.includes('$') ? (
            <Text style={styles.guessingText}>
              {questionWord?.substring(1)}
            </Text>
          ) : (
            questionWord
          )}
        </Text>
      ))}
    </>
  );
};

export default SourceLanguageQuestion;
