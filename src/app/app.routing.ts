import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { ContentComponent } from './shared/Content/Content.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'content' },
  { path: 'content', component: ContentComponent },
  {
    path: 'googleMapPlay',
    loadChildren: '../app/modules/googleMapPlay/googleMapPlay.module#GoogleMapPlayModule',
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);
