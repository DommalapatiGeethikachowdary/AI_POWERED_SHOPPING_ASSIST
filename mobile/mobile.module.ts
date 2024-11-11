import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MobileComponent } from './mobile.component';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { MobileDetailsComponent } from '../mobile-details/mobile-details.component';

const routes: Routes = [
  {
    path: '',
    component: MobileComponent
  }
]


@NgModule({
  declarations: [MobileComponent],
  imports: [

    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class Mobile extends MobileComponent {
  
   
 }






