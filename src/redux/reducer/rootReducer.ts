import { combineReducers } from 'redux';
import { translationExerciseReducer } from './translationExercise';

export const rootReducer = combineReducers({
  translationExercise: translationExerciseReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
