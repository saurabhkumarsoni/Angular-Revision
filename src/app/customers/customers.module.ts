import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DesignUtilityModule } from '../appModules/design-utility/design-utility.module';


@NgModule({
  declarations: [
    CustomersComponent,
    ReactiveFormComponent
  ],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ReactiveFormsModule,
    DesignUtilityModule
  ]
})
export class CustomersModule { }
