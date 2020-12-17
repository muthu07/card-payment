import { createAction, props } from "@ngrx/store";
import { CreditCardPayment } from "../../../shared/models/credit-card-payment";
export const addCardDetail = createAction(
  "[Counter Component] AddCardDetail",
  props<CreditCardPayment>()
);
export const updateCardDetail = createAction(
  "[Counter Component] UpdateCardDetail",
  props<CreditCardPayment>()
);
