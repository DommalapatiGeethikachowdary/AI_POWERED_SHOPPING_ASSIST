import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TravelDetailsComponent } from './travel-details.component';

const routes: Routes = [
  { path: '', component: TravelDetailsComponent }
];

@NgModule({
  declarations: [
    TravelDetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TravelDetailsComponent
  ]
})
export class TravelDetailModule { }
