import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersComponent } from './orders.component';
import { DesignUtilityModule } from '../appModules/design-utility/design-utility.module';


@NgModule({
  declarations: [
    OrdersComponent
  ],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    DesignUtilityModule
    
  ]
})
export class OrdersModule { 


}
