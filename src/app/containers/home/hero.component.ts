import {Component} from "@angular/core";

@Component({
  selector: 'app-hero',
  template: `
    <div style="height: 60vh" class="d-center flex-column">
      <p>INTERIOR DESIGN COMPANY</p>
      <h1>Experience Interior Design</h1>
    </div>
  `,
  styles: [`
    * {
      color: white;
    }

    h1 {
      font-size: 3rem;
      font-family: 'Dela Gothic One', cursive;
      width: 35%;
      text-align: center;
    }

    @media screen and (max-width: 1255px) {
      h1 {
        width: 50%;
      }
    }

    @media screen and (max-width: 875px) {
      h1 {
        width: 65% !important;
      }
    }

    @media screen and (max-width: 676px) {
      h1 {
        width: 100% !important;
      }
    }

  `]
})

export class HeroComponent {
}


// 972
