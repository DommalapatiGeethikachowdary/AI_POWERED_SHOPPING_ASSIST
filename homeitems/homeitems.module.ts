import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeitemsComponent } from './homeitems.component';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: HomeitemsComponent
  }
]



@NgModule({
  declarations: [HomeitemsComponent],
  imports: [RouterModule.forChild(routes),

    CommonModule
  ]
})
export class HomeitemsModule { }

