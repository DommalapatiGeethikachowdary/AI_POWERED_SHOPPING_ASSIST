
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { BaseComponent } from './base/base.component';
import { SharedModule } from './shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ BaseComponent, ],
  imports: [
    CommonModule,   
    FormsModule,
    LayoutRoutingModule,
    SharedModule
  ],
  exports: [
    // Export if needed in other modules
  ]
})
export class LayoutModule { }



