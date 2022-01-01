import {
  TranslationExerciseAction,
  TranslationQuestion,
} from '../actionTypes/translationExercise';
import { ActionTypes } from '../actionTypes/translationExercise';

interface State {
  translationQuestions: TranslationQuestion[];
}

const initialState = {
  translationQuestions: [
    {
      sourceQuestion: '',
      targetQuestion: '',
      options: [],
      ans: '',
      isGivenAnsCorrect: false,
    },
  ],
};

export const translationExerciseReducer = (
  state: State = initialState,
  action: TranslationExerciseAction
): State => {
  switch (action.type) {
    case ActionTypes.SET_TRANSLATION_QUESTIONS:
      return {
        translationQuestions: [...action.payload],
      };

    default:
      return state;
  }
};
