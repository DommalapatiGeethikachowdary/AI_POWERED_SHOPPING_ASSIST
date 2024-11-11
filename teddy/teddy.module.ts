import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TeddyComponent } from './teddy.component';

const routes: Routes = [
  {
    path: '',
    component: TeddyComponent
  }
]

@NgModule({
  declarations: [TeddyComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class TeddyModule { }
