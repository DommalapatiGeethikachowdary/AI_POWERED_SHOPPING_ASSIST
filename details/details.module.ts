import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details.component';
import { FormsModule } from '@angular/forms';



const routes: Routes = [
  {
    path: '',
    component: DetailsComponent
  }
];


@NgModule({
  declarations: [DetailsComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule, 
     FormsModule,
  ],
  exports: [
   
  ]

})
export class DetailsModule { }




