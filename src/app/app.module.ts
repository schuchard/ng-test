import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrderDisplayComponent } from './order-display/order-display.component';
import { PizzaOrderComponent } from './pizza-order/pizza-order.component';
import { TacoOrderComponent } from './taco-order/taco-order.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderDisplayComponent,
    PizzaOrderComponent,
    TacoOrderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
