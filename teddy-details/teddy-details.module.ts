import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeddyDetailsComponent } from './teddy-details.component';

const routes: Routes = [
  {
    path: '',
    component: TeddyDetailsComponent
  }
]

@NgModule({
  declarations: [TeddyDetailsComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TeddyDetailsModule { }
