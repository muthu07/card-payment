import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class CardService {
  constructor(private http: HttpClient) {}

  makePayment(): Observable<any> {
    const paymentURL = "";
    const bodyOptions = {};
    const respone = {
      creditCardNumber: "11111",
      cardHolder: "mani",
      expirationDate: new Date(),
      securityCode: "111",
      amount: 10,
    };
    return of(respone);
    //return this.http.post(paymentURL, bodyOptions);
  }
}
