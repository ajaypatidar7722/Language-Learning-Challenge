export enum ActionTypes {
  SET_TRANSLATION_QUESTIONS = 'SET_TRANSLATION_QUESTIONS',
  GET_TRANSLATION_QUESTIONS = 'GET_TRANSLATION_QUESTIONS',
}

export interface TranslationQuestion {
  sourceQuestion: string;
  targetQuestion: string;
  options: string[];
  ans: string;
  isGivenAnsCorrect: boolean;
}

export interface setTranslationQuestion {
  type: ActionTypes.SET_TRANSLATION_QUESTIONS;
  payload: TranslationQuestion[];
}

export type TranslationExerciseAction = setTranslationQuestion;
