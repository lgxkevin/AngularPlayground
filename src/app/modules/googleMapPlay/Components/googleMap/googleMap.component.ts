import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MapInfoWindow, MapMarker, GoogleMap } from '@angular/google-maps';
@Component({
  selector: 'app-googleMap',
  templateUrl: './googleMap.component.html',
  styleUrls: ['./googleMap.component.css']
})

export class GoogleMapComponent implements OnInit {
  @ViewChild(GoogleMap, { static: false }) map: GoogleMap
  @ViewChild(MapInfoWindow, { static: false }) info: MapInfoWindow
  zoom = 12;
  center: google.maps.LatLngLiteral;
  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: false,
    scrollwheel: true,
    disableDoubleClickZoom: true,
    streetViewControl: true,
    maxZoom: 15,
    minZoom: 8,
    fullscreenControl: true
  };
  markers = [];
  infoContent = '';
  image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    // This marker is 20 pixels wide by 32 pixels high.
    size: new google.maps.Size(20, 32),
    // The origin for this image is (0, 0).
    origin: new google.maps.Point(0, 0),
    // The anchor for this image is the base of the flagpole at (0, 32).
    anchor: new google.maps.Point(0, 32)
  };
  shape = {
    coords: [1, 1, 1, 20, 18, 20, 18, 1],
    type: 'poly'
  };

  constructor() {
  }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.addMarker();
    });
  }

  zoomIn() {
    if (this.zoom < this.mapOptions.maxZoom) {
      this.zoom++;
    }
  }
  zoomOut() {
    if (this.zoom > this.mapOptions.minZoom) {
      this.zoom--;
    }
  }

  logCenter() {
    console.log(JSON.stringify(this.map.getCenter()));
  }


  click(event: google.maps.MouseEvent) {
    console.log(event);
  }

  addMarker() {
    this.markers.push({
      position: {
        lat: this.center.lat,
        lng: this.center.lng,
      },
      label: {
        color: 'red',
        text: 'Home label ' + (this.markers.length + 1),
      },
      title: 'Home ' + (this.markers.length + 1),
      info: 'Marker info ' + (this.markers.length + 1),
      options: {
        icon: this.image,
        shape: this.shape,
        animation: google.maps.Animation.DROP,
        draggable: true
      }
    });
  }

  openInfo(marker: MapMarker, content) {
    this.infoContent = content;
    this.info.open(marker);
  }

}
