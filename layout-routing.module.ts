import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './base/base.component';
import { authGuard } from '../services/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: BaseComponent,
    canActivate: [authGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'teddy',
        loadChildren: () => import('./teddy/teddy.module').then(m => m.TeddyModule)
      },
      {
        path: 'mobile',
        loadChildren: () => import('./mobile/mobile.module').then(m => m.Mobile)
      },
      {
        path: 'travel',
        loadChildren: () => import('./travel/travel.module').then(m => m.TravelModule)
      },
      {
        path: 'homeitems',
        loadChildren: () => import('./homeitems/homeitems.module').then(m => m.HomeitemsModule)
      },
    
      {
        path: 'dress',
        loadChildren: () => import('./dress/dress.module').then(m => m.DressModule)
      },
      {
        path: 'travel-detail',
        loadChildren: () => import('./travel/travel-details/travel-details.module').then(m => m.TravelDetailModule)
      },
      {
        path: 'shared',
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
      },
      {
        path: 'details',
        loadChildren: () => import('./details/details.module').then(m => m.DetailsModule)
      },
      {
        path: 'mobile-details',
        loadChildren: () => import('./mobile-details/mobile-details.module').then(m => m.MobileDetailsModule)
      },
      {
        path: 'layouts',
        loadChildren: () => import('./layouts/layouts.module').then(m => m.LayoutsModule)
      },
      {
        path: 'ask-me-dialog',
        loadChildren: () => import('./ask-me-dialog/ask-me-dialog.module').then(m => m.AskMeDialogModule)
      },
      {
        path: 'home-item-detail',
        loadChildren: () => import('./home-item-detail/home-item-detail.module').then(m => m.HomeItemDetailModule)
      },
      {
        path: 'search',
        loadChildren: () => import('./search/search.module').then(m => m.SearchModule)
      },

      {
        path: 'teddy-details',
        loadChildren: () => import('./teddy-details/teddy-details.module').then(m => m.TeddyDetailsModule)
      },
      
     
     
      { path: '', redirectTo: 'home', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
