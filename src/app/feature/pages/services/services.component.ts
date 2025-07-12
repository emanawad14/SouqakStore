import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-services',
  imports: [CarouselModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    autoplaySpeed: 1000,
     margin: 80,
   
    touchDrag: false,
    pullDrag: true,
    dots: true,
    
    navSpeed: 700,
   
    navText: ['', ''],
    responsive: {
    0: { items: 1 },
    600: { items: 2 },
    1000: { items: 3 }
  },
    nav: false
  }

}
