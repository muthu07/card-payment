import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { CreditCardPayment } from "../shared/models/credit-card-payment";
import { Store } from "@ngrx/store";
import { State as CardPaymentState } from "../core/state/reducers";
import { addCardDetail } from "../core/state/actions/card.actions";

@Component({
  selector: "app-card-payment",
  templateUrl: "./card-payment.component.html",
  styleUrls: ["./card-payment.component.scss"],
})
export class CardPaymentComponent implements OnInit {
  creditCardPaymentForm: FormGroup;
  future = new Date();
  constructor(
    private fb: FormBuilder,
    private cardPaymentStore: Store<CardPaymentState>
  ) {
    this.future.setDate(this.future.getDate() + 1);
  }

  ngOnInit(): void {
    this.creditCardPaymentForm = this.fb.group({
      creditCardNumber: ["", Validators.required],
      cardHolder: ["", Validators.required],
      expirationDate: ["", Validators.required],
      securityCode: [""],
      amount: ["", Validators.required],
    });
  }

  makePayment() {
    if (this.creditCardPaymentForm.valid) {
      const cardDetails: CreditCardPayment = {
        creditCardNumber: "11111",
        cardHolder: "mani",
        expirationDate: new Date(),
        securityCode: "111",
        amount: 10,
      };
      this.cardPaymentStore.dispatch(addCardDetail(cardDetails));
    }
  }

  get f() {
    return this.creditCardPaymentForm.controls;
  }
}
