import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { State as CardPaymentState } from "../core/state/reducers";
import { CreditCardPayment } from "../shared/models/credit-card-payment";
import { addCardDetail } from "../core/state/actions/card.actions";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  paymentData;

  constructor(private cardPaymentStore: Store<CardPaymentState>) {}

  ngOnInit(): void {
    this.cardPaymentStore.select("card").subscribe((cardDetails: any) => {
      if (cardDetails.cardData) {
       this.paymentData = cardDetails.cardData;
      }
    });
  }
}
