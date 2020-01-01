import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapComponent } from './Components/googleMap/googleMap.component';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    GoogleMapsModule
  ],
  declarations: [GoogleMapComponent]
})
export class GoogleMapModule { }
