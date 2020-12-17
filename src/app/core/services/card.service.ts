import { Injectable } from "@angular/core";
import { HttpHeaders, HttpClient, HttpParams } from "@angular/common/http";
import { map } from "rxjs/operators";
import { Observable, of } from "rxjs";

@Injectable({ providedIn: "root" })
export class CardService {
  constructor(private http: HttpClient) {}

  makePayment(cardDetails): Observable<any> {
    const paymentURL = "";
    const bodyOptions = {};
    cardDetails = Object.assign({}, cardDetails, {expirationDate: cardDetails.expirationDate.toDate()});
    return of(cardDetails);
    //POST method API call will implement here
    //return this.http.post(paymentURL, bodyOptions);
  }
}
