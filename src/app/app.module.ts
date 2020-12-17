import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { StoreModule } from "@ngrx/store";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";
import { reducers, metaReducers } from "./core/state/reducers";
import { CardPaymentComponent } from "./card-payment/card-payment.component";
import { EffectsModule } from "@ngrx/effects";
import { environment } from "../environments/environment";
import Effects from "./core/state/effects/index";

import { MaterialModule } from "./app.material.module";
import { AppRoutingModule } from "./app.router.module";
import { from } from "rxjs";
import { HttpClientModule } from "@angular/common/http";
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [AppComponent, CardPaymentComponent, HomeComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    EffectsModule.forRoot(Effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
