import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedComponent } from './shared.component'; 
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component:SharedComponent 
  }
]

@NgModule({
  declarations: [
    SharedComponent 
  ],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    SharedComponent 
  ]
})
export class SharedModule { }
