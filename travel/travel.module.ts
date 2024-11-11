import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { TravelComponent } from './travel.component';





const routes: Routes = [
  { path: '', component: TravelComponent },
  
];

@NgModule({
  declarations: [
    TravelComponent,
  
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    TravelComponent,
    
  ]
})
export class TravelModule { }
