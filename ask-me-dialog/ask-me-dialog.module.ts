import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AskMeDialogComponent } from './ask-me-dialog.component';

const routes: Routes = [
  {
    path: '',
    component: AskMeDialogComponent
  }
]


@NgModule({
  declarations: [AskMeDialogComponent],
  imports: [RouterModule.forChild(routes),
    CommonModule
  ]
})
export class AskMeDialogModule { }
