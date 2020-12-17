import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AppComponent } from './app.component';
import { CardPaymentComponent } from './card-payment/card-payment.component';
const routes: Routes = [
    {
        path: 'home',
        component: AppComponent
    },
    {
        path: 'card-payment',
        component: CardPaymentComponent
    },
    {
        path: "**",
        redirectTo: '/home'
      }
];

const routerModuleForChild = RouterModule.forRoot(routes, { useHash: true });

@NgModule({
  imports: [routerModuleForChild],
  exports: [RouterModule]
})
export class AppRoutingModule {}