import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { addDoc, collection, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';

import ExerciseContainer from '../../components/ExerciseContainer';
import ExerciseOption from '../../components/ExerciseOption';
import SourceLanguageQuestion from '../../components/SourceLanguageQuestion';
import TargetLanguageQuestion from '../../components/TargetLanguageQuestion';
import { ANSWER_TYPES } from '../../constants/answerTypes';
import { BUTTON_TYPES } from '../../constants/buttonTypes';
import { db } from '../../services/firebase/config';
import { useTypedSelector } from '../../redux/hooks/useTypedSelector';
import { setTranslationQuestions } from '../../redux/action/translationExercixe';
import { TranslationQuestion } from '../../redux/actionTypes/translationExercise';
import { firebaseCollection } from '../../constants/firebase/collections';
import { styles } from './styles';

const buttonTitles = {
  continue: 'Continue',
  checkAnswer: 'Check Answer',
};

const TranslationExercise = () => {
  const [selectedOption, setOption] = useState<string>('');
  const [selectedOptionIsValid, setSelectedOptionIsValid] =
    useState<boolean>(false);
  const [buttonTitle, setButtonTitle] = useState<string>(buttonTitles.continue);
  const [answerDescription, setAnswerDescription] = useState<string>('');
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isCompleteExercise, setIsCompleteExercise] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { translationQuestions } = useTypedSelector(
    (state) => state.translationExercise
  );

  const currentQuestion = translationQuestions?.[activeIndex] || {};
  const splittedSourceLangQue =
    currentQuestion?.sourceQuestion?.split(' ') || [];
  const splittedTargetLangQue =
    currentQuestion?.targetQuestion?.split(' ') || [];
  const answerType = answerDescription
    ? selectedOptionIsValid
      ? ANSWER_TYPES.RIGHT
      : ANSWER_TYPES.WRONG
    : '';
  const buttonType = answerDescription
    ? selectedOptionIsValid
      ? BUTTON_TYPES.SUCCESS
      : BUTTON_TYPES.ERROR
    : '';

  const progressValue = ((activeIndex + 1) / translationQuestions.length) * 100;

  useEffect(() => {
    const EnToDeTranslationQuestionRef = collection(
      db,
      firebaseCollection.EnToDeTranslationQuestion
    );

    // Fetch Translation Qustions from firebase with realtime updates
    const unsubscribeSnapshot = onSnapshot(
      EnToDeTranslationQuestionRef,
      (snapshot) => {
        const questionsList: any = snapshot.docs.map((doc) => doc.data());
        setQuestions(questionsList);
      }
    );

    return () => {
      // Unsubscribe firebase realtime updates
      unsubscribeSnapshot();
    };
  }, []);

  const setQuestions = (questions: TranslationQuestion[]) => {
    dispatch(setTranslationQuestions(questions));
  };

  const onSelectOption = (event: string) => {
    setOption(event);
    setButtonTitle(buttonTitles.checkAnswer);
  };

  const onSubmitAnswer = (event: any) => {
    // Execute if part when button press for answer check, otherwise execute else part.
    if (buttonTitle === buttonTitles.checkAnswer) {
      const isValidAnswer =
        translationQuestions[activeIndex]?.ans === selectedOption;
      const questionsClone: TranslationQuestion[] = [...translationQuestions];

      // Execute if part when selected answer will be right, otherwise execute else part,
      if (isValidAnswer) {
        questionsClone[activeIndex].isGivenAnsCorrect = true;
        setSelectedOptionIsValid(true);
        setButtonTitle(buttonTitles.continue);
        setAnswerDescription('Great Job!');
      } else {
        questionsClone[activeIndex].isGivenAnsCorrect = false;
        setSelectedOptionIsValid(false);
        setButtonTitle(buttonTitles.continue);
        setAnswerDescription(
          `Answer: ${translationQuestions[activeIndex].ans}`
        );
      }
      setQuestions(questionsClone);
    } else {
      // Execute if part when exercise has been finished and having wrong answers, otherwise execute else part.
      if (isCompleteExercise) {
        analysQuestionsAns();
      } else {
        // Execute if part until the second last question. Only For the last question execute else part.
        if (activeIndex < translationQuestions.length - 1) {
          setActiveIndex(activeIndex + 1);
          resetForm();
        } else {
          setIsCompleteExercise(true);
          analysQuestionsAns();
        }
      }
    }
  };

  // Analys question's answer.
  const analysQuestionsAns = () => {
    const wrongAnsIndex = translationQuestions.findIndex(
      (question) => !question.isGivenAnsCorrect
    );

    // Execute when all answers will be right.
    if (wrongAnsIndex === -1) {
      setIsCompleteExercise(false);
      setActiveIndex(0);
      resetForm();
      Alert.alert('Congratulations! Game over');
      return null;
    }

    resetForm();
    setActiveIndex(wrongAnsIndex);
  };

  const resetForm = () => {
    setButtonTitle(buttonTitles.continue);
    setSelectedOptionIsValid(false);
    setOption('');
    setAnswerDescription('');
  };

  return (
    <ExerciseContainer
      answerType={answerType}
      buttonType={buttonType}
      buttonTitle={buttonTitle}
      description={answerDescription}
      onPressButton={onSubmitAnswer}
      isButtonDisable={!Boolean(selectedOption)}
      progressValue={progressValue}
      activeIndex={activeIndex}
      onGoBack={setActiveIndex}
    >
      <View style={styles.root}>
        <Text style={styles.headingText}>Fill in the missing word</Text>
        <View style={styles.questionContainer}>
          <SourceLanguageQuestion questionWords={splittedSourceLangQue} />
        </View>

        <View
          style={[styles.questionContainer, styles.targetQuestionContainer]}
        >
          <TargetLanguageQuestion
            questionWords={splittedTargetLangQue}
            selectedOption={selectedOption}
            answerType={answerType}
          />
        </View>

        <View style={styles.optionsContainer}>
          <ExerciseOption
            disabled={Boolean(answerDescription)}
            options={currentQuestion?.options}
            selectedOption={selectedOption}
            onSelectOption={onSelectOption}
          />
        </View>
      </View>
    </ExerciseContainer>
  );
};

export default TranslationExercise;
