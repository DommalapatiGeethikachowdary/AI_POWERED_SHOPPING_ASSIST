import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DressComponent } from './dress.component';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel
import { Item } from 'src/app/services/item.model';

const routes: Routes = [
  {
    path: '',
    component: DressComponent
  }
]

@NgModule({
  declarations: [DressComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule  // Include FormsModule
  ]
})
export class DressModule { }




export interface Dress extends Item {
  fabric: string;
  size: string;
}