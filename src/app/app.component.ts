import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  //  templateUrl: './app.component.html',
  template: `
  <mat-card>
    <mat-card-title>Running GPS</mat-card-title>
    <mat-card-content>
      Longtitude: {{longtitude}}
      Latitude: {{latitude}}
      Distance: {{distance}}
      <br/>
      <button mat-raised-button (click)="onStart()">Start</button>
      <button mat-raised-button (click)="onStop()">Stop</button>
      <button mat-raised-button (click)="onReset()">Reset</button>
    </mat-card-content>
  </mat-card>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'GPS';
  errMsg: string;
  longtitude: number;
  latitude: number;
  distance : number;
  prevPos: Position;
  ngOnInit() {

  }
  getPos() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition((position) => {
        this.distance+=this.calculateDistance(this.prevPos.coords.latitude, position.coords.latitude , this.prevPos.coords.latitude, position.coords.latitude);
        this.longtitude = position.coords.longitude;
        this.latitude = position.coords.latitude;
      });
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  }
  onStart() {
    navigator.geolocation.getCurrentPosition(x=>{
      this.prevPos=x;
    });
    this.getPos();
  }
  onStop() {
  }
  calculateDistance(lat1:number,lat2:number,long1:number,long2:number) : number {
    const p = 0.017453292519943295;    // Math.PI / 180
    const c = Math.cos;
    const a = 0.5 - c((lat1-lat2) * p) / 2 + c(lat2 * p) *c((lat1) * p) * (1 - c(((long1- long2) * p))) / 2;
    const dis = (12742 * Math.asin(Math.sqrt(a))); // 2 * R; R = 6371 km
    return dis;
  }
}
