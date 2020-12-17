import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
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
    private router: Router,
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
        creditCardNumber: this.f["creditCardNumber"].value,
        cardHolder: this.f["cardHolder"].value,
        expirationDate: this.f["expirationDate"].value,
        securityCode: this.f["securityCode"].value,
        amount: this.f["amount"].value,
      };
      this.cardPaymentStore.dispatch(addCardDetail(cardDetails));
      this.router.navigate(["/home"]);
    }
  }

  get f() {
    return this.creditCardPaymentForm.controls;
  }
}
