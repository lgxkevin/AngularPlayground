import { GoogleMapComponent } from './Components/googleMap/googleMap.component';

import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  { path: '', component: GoogleMapComponent }
]

export const routing: ModuleWithProviders = RouterModule.forChild(routes)