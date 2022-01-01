import {
  ActionTypes,
  TranslationQuestion,
} from '../actionTypes/translationExercise';

export const setTranslationQuestions = (payload: TranslationQuestion[]) => ({
  type: ActionTypes.SET_TRANSLATION_QUESTIONS,
  payload,
});
