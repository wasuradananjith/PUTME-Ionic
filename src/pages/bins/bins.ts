import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
 
declare var google;
 
@IonicPage() 
@Component({
  selector: 'page-bins',
  templateUrl: 'bins.html'
})
export class BinsPage {
 
  @ViewChild('map') mapElement: ElementRef;
  map: any;
 
  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
 
  }
 
  ionViewDidLoad(){
    this.loadMap();
  }
 
  loadMap(){
 
    this.geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
 
      this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
 
      let marker = new google.maps.Marker({
    map: this.map,
    animation: google.maps.Animation.DROP,
    position: this.map.getCenter()
  });

    let content = "<h4>You are Here!</h4>";         
 
  this.addInfoWindow(marker, content);
    }, (err) => {
      console.log(err);
    });
 
  }

  addInfoWindow(marker, content){
 
  let infoWindow = new google.maps.InfoWindow({
    content: content
  });
 
  google.maps.event.addListener(marker, 'click', () => {
    infoWindow.open(this.map, marker);
  });
 
}
}
