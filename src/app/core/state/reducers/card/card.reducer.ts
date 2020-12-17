import { createReducer, on } from "@ngrx/store";
import { stat } from "fs";
import { updateCardDetail } from "../../actions/card.actions";

export const cardFeatureKey = "card";

export interface State {
  cardData: object;
}
export const initialState: State = { cardData: {} };

export const cardReducer = createReducer(
  initialState,
  on(updateCardDetail, (state, { ...card }) => {
    console.log(card, "check***");
    return {
      ...state,
      cardData: {
        ...card,
      },
    };
  })
);
