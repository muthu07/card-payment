import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { switchMap, map, catchError } from "rxjs/operators";
import { of, Observable } from "rxjs";
import { CardService } from "../../../services/card.service";
import { addCardDetail, updateCardDetail } from "../../actions/card.actions";
import { CreditCardPayment } from "../../../../shared/models/credit-card-payment";

@Injectable()
export class CardEffects {
  constructor(private actions$: Actions, private cardService: CardService) {}

  uploadFile$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addCardDetail.type),
      switchMap(() => {
        return this.cardService.makePayment();
        //.pipe(catchError(this.paymentError))
      }),
      map((data) => {
        console.log(data, "effects");
        const result = data ? data : {};
        const cardDetails: CreditCardPayment = {
          creditCardNumber: result.creditCardNumber,
          cardHolder: result.cardHolder,
          expirationDate: result.expirationDate,
          securityCode: result.securityCode,
          amount: result.amount,
        };
        return updateCardDetail(cardDetails);
      })
    )
  );
}
