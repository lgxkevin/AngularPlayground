import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './googleMapPlay.routing';

import { GoogleMapComponent } from './Components/googleMap/googleMap.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule,
    routing
  ],
  declarations: [GoogleMapComponent]
})
export class GoogleMapPlayModule { }
