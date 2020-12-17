import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CardPaymentComponent } from "./card-payment/card-payment.component";
const routes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
  {
    path: "home",
    component: HomeComponent,
  },
  {
    path: "card-payment",
    component: CardPaymentComponent,
  },
  {
    path: "**",
    redirectTo: "home",
  },
];

const routerModuleForChild = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  imports: [routerModuleForChild],
  exports: [RouterModule],
})
export class AppRoutingModule {}
