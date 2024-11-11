import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeItemDetailComponent } from './home-item-detail.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: HomeItemDetailComponent
  }
]

@NgModule({
  declarations: [HomeItemDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [HomeItemDetailComponent,RouterModule] 
})
export class HomeItemDetailModule { }





