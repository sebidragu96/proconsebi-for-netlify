import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  mybutton: HTMLElement;
  constructor() { }

  ngOnInit(): void {
    this.mybutton = document.getElementById('redirectTopDesign');
    this.topFunctionDesign();
  }

  @HostListener("window:scroll", []) onWindowScroll() {
    this.scrollFunction();
  }

  scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.mybutton.style.display = "block"; // cand se da scroll, se afiseaza butonul care face redirect top
    } else {
      this.mybutton.style.display = "none";
    }
  }

    // cand se da click pe butonul redirectTop
    topFunctionDesign() {
      this.scrollToTop();
    }

    scrollToTop = () => {
      const c = document.documentElement.scrollTop || document.body.scrollTop;
      if (c > 0) {
        window.requestAnimationFrame(this.scrollToTop);
        window.scrollTo(0, c - c / 8);
      }
    };
}
