import { createAction, props } from "@ngrx/store";
import { CreditCardPayment } from "../../../shared/models/credit-card-payment";
export const addCardDetail = createAction(
  "[Card Component] AddCardDetail",
  props<CreditCardPayment>()
);
export const updateCardDetail = createAction(
  "[Card Component] UpdateCardDetail",
  props<CreditCardPayment>()
);
