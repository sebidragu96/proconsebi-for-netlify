import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['contact.component.css']
})
export class ContactComponent implements OnInit {
  item: string;
  zile: Array<any>;
  contactImage: HTMLElement;
  contactImageLowScale: HTMLElement;
  width: number;

  constructor() { }

  ngOnInit(): void {
    this.contactImage = document.getElementById('background-img-contact');
    this.contactImageLowScale = document.getElementById('contact-container-lowscale');
    
    this.setImageHeightOnLoading();

    this.zile = [
      {zi: 'Luni', program: '09:00 - 16:00'}, 
      {zi: 'Marți', program: '09:00 - 16:00'}, 
      {zi: 'Miercuri', program: '09:00 - 16:00'}, 
      {zi: 'Joi', program: '09:00 - 16:00'}, 
      {zi: 'Vineri', program: '09:00 - 16:00'}, 
      {zi: 'Sâmbătă', program: 'închis'},   
      {zi: 'Duminică', program: 'închis'}, 
    ];
  }

  getZiCurenta(): string {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Duminică";
    weekday[1] = "Luni";
    weekday[2] = "Marți";
    weekday[3] = "Miercuri";
    weekday[4] = "Joi";
    weekday[5] = "Vineri";
    weekday[6] = "Sâmbătă";
  
    var n = weekday[d.getDay()];
    return n;
  }

  getOre(): number{
    var d = new Date();
    var n = d.getHours();
    return n;
  }

  setImageHeightOnLoading() {
    this.contactImage.style.height = '80vh';
    this.contactImage.style.display = 'block';
    this.contactImageLowScale.style.display = 'none';

    if (window.innerWidth < 1600){
      this.contactImage.style.height = '65vh';
    }
    if (window.innerWidth < 1200){
      this.contactImage.style.height = '50vh';
    }
    if (window.innerWidth < 992){
      this.contactImage.style.height = '40vh';
    }
    if (window.innerWidth < 768){
      this.contactImage.style.height = '30vh';
    }
    if (window.innerWidth < 576){
      this.contactImageLowScale.style.display = 'block';
      this.contactImage.style.display = 'none';
    }
  }

  @HostListener("window:resize", ['$event']) onWindowResize() {
    this.setImageHeightOnLoading();
  }

}

