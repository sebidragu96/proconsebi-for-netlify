import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-acasa',
  templateUrl: './acasa.component.html',
  styleUrls: ['./acasa.component.css']
})
export class AcasaComponent implements OnInit {
  mobileResolution: Boolean;
  constructor() { }

  ngOnInit(): void {
    if (window.innerWidth < 591) {
      this.mobileResolution = true;
    }
    else {
      this.mobileResolution = false;
    }
  }
  setImageHeightOnLoading() {
    if (window.innerWidth < 591) {
      this.mobileResolution = true;
    }
    else {
      this.mobileResolution = false;
    }
  }
  @HostListener("window:resize", ['$event']) onWindowResize() {
    this.setImageHeightOnLoading();
  }
}

