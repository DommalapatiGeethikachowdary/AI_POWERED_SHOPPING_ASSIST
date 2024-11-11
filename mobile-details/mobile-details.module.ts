import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MobileDetailsComponent } from './mobile-details.component';

const routes: Routes = [
  {
    path: '',
    component: MobileDetailsComponent
  }
]


@NgModule({
  declarations: [MobileDetailsComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class MobileDetailsModule { }
