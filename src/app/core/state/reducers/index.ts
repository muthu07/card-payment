import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

import * as fromCard from './card/card.reducer';

export interface State {
  [fromCard.cardFeatureKey]: fromCard.State
}

export const reducers: ActionReducerMap<State> = {
  [fromCard.cardFeatureKey]: fromCard.cardReducer
};

// This method resets the state to initial state on user logout
// returning state as undefined initialises it to initial state
export const clearState = (reducer: ActionReducer<any>): ActionReducer<any> => (state, action): ActionReducer<any> => {
  let updatedState = state;
  if (action.type === null) {
    updatedState = undefined;
  }
  return reducer(updatedState, action);
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [clearState];
