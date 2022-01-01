export enum ActionTypes {
  SET_TRANSLATION_QUESTIONS = 'SET_TRANSLATION_QUESTIONS',
  GET_TRANSLATION_QUESTIONS = 'GET_TRANSLATION_QUESTIONS',
}

export interface TranslationQuestion {
  englishQue: string;
  deQue: string;
  options: string[];
  ans: string;
  isGivenAnsCorrect: boolean;
}

export interface setTranslationQuestion {
  type: ActionTypes.SET_TRANSLATION_QUESTIONS;
  payload: TranslationQuestion[];
}

export type TranslationExerciseAction = setTranslationQuestion;
