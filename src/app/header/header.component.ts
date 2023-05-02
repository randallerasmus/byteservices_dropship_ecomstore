import {Component, OnInit} from '@angular/core';
import { RouterModule } from '@angular/router';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  activeSlideIndex = 1;
  searchQuery: any;
  user: any;

  constructor(
    private router: Router,
  ) {

  }

  ngOnInit(): void {
    setInterval(() => {
      const carouselSlides = document.querySelectorAll('.carousel-slide');
      carouselSlides.forEach((slide, index) => {
        slide.classList.remove('active');
        if ((index + 1) === this.activeSlideIndex) {
          slide.classList.add('active');
        }
      });
      if (this.activeSlideIndex === 3) {
        this.activeSlideIndex = 1;
      } else {
        this.activeSlideIndex++;
      }
      const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
      const slideWidth = (document.querySelector('.carousel-slide') as HTMLElement)?.offsetWidth ?? 0;
      carouselInner.style.left = `-${(this.activeSlideIndex - 1) * slideWidth}px`;
    }, 5000);
  }


  toggle() {

  }

  onSubmit() {

  }

  logout() {

  }

  toggleSidenav() {

  }

  contactUs() {
    this.router.navigate(['/contact-us']);
  }
}

