import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { TacoOrderComponent } from './taco-order/taco-order.component';

const routes = [
  {
    path: 'pizza',
    component: PizzaOrderComponent,
  },
  {
    path: 'taco',
    component: TacoOrderComponent,
  },
];

@NgModule({
  declarations: [AppComponent, OrderDisplayComponent, PizzaOrderComponent, TacoOrderComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
