import {Component} from "@angular/core";

@Component({
  selector: 'app-home',
  template: `
    <div class="h-100">
      <header>
        <app-navbar></app-navbar>
        <app-hero></app-hero>
      </header>
      <app-boxes></app-boxes>
      <app-red-circle></app-red-circle>
      <app-why-us></app-why-us>
    </div>
  `,
  styles: [`
    header {
      height: 100vh;
      background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url("../../assets/1.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      width: 100%;
      background-attachment: fixed;
      overflow: hidden;
    }
  `]
})
export class HomeComponent {
}
