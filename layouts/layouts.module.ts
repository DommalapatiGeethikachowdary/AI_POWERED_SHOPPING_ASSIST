import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent
  }
]


@NgModule({
  declarations: [ LayoutsComponent ],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    LayoutsComponent, 
  ]
})
export class LayoutsModule { }



