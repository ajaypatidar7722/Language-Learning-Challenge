import React, { Fragment } from 'react';
import { Text } from 'react-native';

import FilledOption from './FilledOption';
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
  return (
    <>
      {questionWords.map((questionWord: string, index: number) => (
        <Fragment key={`${questionWord}+${index}`}>
          {questionWord?.includes('_') ? (
            <FilledOption
              answerType={answerType}
              selectedOption={selectedOption}
            />
          ) : (
            <Text style={styles.questionText}>{questionWord}</Text>
          )}
        </Fragment>
      ))}
    </>
  );
};

export default TargetLanguageQuestion;
