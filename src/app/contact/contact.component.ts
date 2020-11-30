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
  contentInchisDiv: string;

  constructor() { 
    this.contentInchisDiv = this.esteSarbatoare() ? "Inchis de sarbatori" :  "Inchis acum";
  }
  
  ngOnInit(): void {
    this.contactImage = document.getElementById('background-img-contact');
    this.contactImageLowScale = document.getElementById('contact-container-lowscale');
    this.topFunction();
    
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

  esteSarbatoare(): boolean {
    var d = new Date();
    switch (d.toLocaleDateString('en-US'))
    {
      case '11/30/2020':  /* Sfantul Andrei                     */
      case '12/1/2020':   /* Ziua Nationala a Romaniei          */
      case '12/25/2020':  /* Craciunul (ziua 1)                 */
      case '12/26/2020':  /* Craciunul (ziua 2)                 */
      case '1/1/2020':    /* Anul Nou (ziua 1)                  */
      case '1/2/2020':    /* Anul Nou (ziua 2)                  */
      case '1/24/2020':   /* Ziua Unirii Principatelor Romane   */
      case '4/17/2020':   /* Vinerea Mare                       */
      case '4/19/2020':   /* Paste ortodox (ziua 1)             */
      case '4/20/2020':   /* Paste ortodox (ziua 2)             */
      case '5/1/2020':    /* Ziua Muncii                        */ 
      case '6/1/2020':    /* Ziua Copilului                     */
      case '6/7/2020':    /* Rusalii (ziua 1)                   */
      case '6/8/2020':    /* Rusalii (ziua 2)                   */ 
      case '8/15/2020':   /* Adormirea Maicii Domnului          */
        return true;
      default:
        return false;
    }
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

    // cand se da click pe butonul redirectTop
    topFunction() {
      this.scrollToTop();
    }
  
     scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(this.scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };

  @HostListener("window:resize", ['$event']) onWindowResize() {
    this.setImageHeightOnLoading();
  }

}

