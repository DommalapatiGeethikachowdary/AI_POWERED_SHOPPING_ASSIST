import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './search.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: '',
    component: SearchComponent,
  }
]


@NgModule({
  declarations: [SearchComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    FormsModule
  ]
})
export class SearchModule { }
