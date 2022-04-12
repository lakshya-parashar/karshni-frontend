import {Component} from "@angular/core";

@Component({
  selector: 'app-our-partners',
  template: `
    <div class="container" style="padding: 3rem 0">
      <owl-carousel-o [options]="customOptions">
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/stylam.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/stylam.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/stylam.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/stylam.png">
          </div>
        </ng-template>
        <ng-template carouselSlide>
          <div class="slide">
            <img src="../../../assets/stylam.png">
          </div>
        </ng-template>
      </owl-carousel-o>
    </div>
  `,
  styles: [`
    img {
      margin: 0 auto;
      max-width: 100%;
      height: 60px !important;
      box-shadow: none;
      object-fit: contain !important;
      filter: grayscale(1);
      cursor: pointer;
    }

    img:hover {
      filter: grayscale(0);
    }
  `]
})
export class OurPartnersComponent {
  customOptions: any = {
    loop: true,
    margin: 10,
    dots: false,
    navSpeed: 700,
    autoplay:true,
    responsiveClass: true,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 5
      }
    },
    nav: false
  }
}
