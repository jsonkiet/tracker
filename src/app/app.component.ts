import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GPS';
  errMsg: string;
  longtitude: number;
  latitude: number;
  ngOnInit() {

  }
  watchPos() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.longtitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
}
