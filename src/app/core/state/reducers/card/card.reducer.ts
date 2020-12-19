import { createReducer, on } from "@ngrx/store";
import { updateCardDetail } from "../../actions/card.actions";

export const cardFeatureKey = "card";

export interface State {
  cardData: object;
}
export const initialState: State = { cardData: {} };

export const cardReducer = createReducer(
  initialState,
  on(updateCardDetail, (state, { ...card }) => {
    return {
      ...state,
      cardData: {
        ...state.cardData,
        [card.creditCardNumber]: {
          ...card,
        },
      },
    };
  })
);
