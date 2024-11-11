import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { HomeComponent } from './home.component';
import { RouterLink, RouterModule, Routes } from '@angular/router';
import { Item } from 'src/app/services/item.model';
const routes: Routes = [{
  path: '', component: HomeComponent
}]
@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule 
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
export interface Dress extends Item {
  fabric: string;
  size: string;
}