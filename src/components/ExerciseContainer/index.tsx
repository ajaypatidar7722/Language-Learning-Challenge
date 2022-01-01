import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { colors } from '../../constants/colors';
import Button from '../Button';
import ExerciseButtonContainer from '../ExerciseButtonContainer';
import ProgressBar from '../ProgressBar';
import { styles } from './styles';
import { answerTypes } from '../../constants/answerTypes';

type ExerciseContainerProps = {
  children: any;
  buttonTitle: string;
  buttonType: string;
  onPressButton: any;
  answerType: string;
  description: string;
  isButtonDisable: boolean;
  progressValue: number;
  activeIndex: number;
  onGoBack: Function;
};

const ExerciseContainer = ({
  children,
  buttonTitle,
  buttonType,
  onPressButton,
  answerType,
  description,
  isButtonDisable,
  progressValue,
  activeIndex,
  onGoBack,
}: ExerciseContainerProps) => {
  const isAnswerRightOrWrong =
    answerTypes.RIGHT === answerType || answerTypes.WRONG === answerType;

  return (
    <>
      <View style={styles.progressBarContainer}>
        <TouchableOpacity
          disabled={activeIndex === 0 || isAnswerRightOrWrong}
          onPress={() => onGoBack(activeIndex - 1)}
        >
          <AntDesign name="left" size={24} color={colors.white} />
        </TouchableOpacity>
        <ProgressBar progressValue={progressValue} />
      </View>

      <View style={styles.root}>
        <View style={styles.questionContainer}>{children}</View>
        <View>
          <ExerciseButtonContainer
            answerType={answerType}
            description={description}
          >
            <Button
              title={buttonTitle}
              onPress={onPressButton}
              buttonType={buttonType}
              disabled={isButtonDisable}
            />
          </ExerciseButtonContainer>
        </View>
      </View>
    </>
  );
};

export default ExerciseContainer;
