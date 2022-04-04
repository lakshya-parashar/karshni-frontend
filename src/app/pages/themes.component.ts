import {Component} from "@angular/core";

@Component({
  selector: 'app-themes',
  template: `
    <div>
      <app-themes-hero></app-themes-hero>
      <div class="container" style="padding: 4rem 0">
        <div class="row">
          <div class="col-lg-6">
            <div class="card" style="width: 30rem;">
              <a href="#">
                <div class="inner">
                  <img src="../../assets/CLASSIC%20STYLE.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h2>Classic Style</h2>
                </div>
              </a>
            </div>
          </div>

          <div class="col-lg-6">
            <div class="card" style="width: 30rem;">
              <a href="#">
                <div class="inner">
                  <img src="../../assets/ART%20DECO%20STYLE.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h2>Classic Style</h2>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card" style="width: 30rem;">
              <a href="#">
                <div class="inner">
                  <img src="../../assets/CLASSIC%20STYLE.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h2>Classic Style</h2>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card" style="width: 30rem;">
              <a href="#">
                <div class="inner">
                  <img src="../../assets/CLASSIC%20STYLE.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h2>Classic Style</h2>
                </div>
              </a>
            </div>
          </div>
          <div class="col-lg-6">
            <div class="card" style="width: 30rem;">
              <a href="#">
                <div class="inner">
                  <img src="../../assets/CLASSIC%20STYLE.jpg" class="card-img-top" alt="...">
                </div>
                <div class="card-body">
                  <h2>Classic Style</h2>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    a {
      color: black;
      text-decoration: none;
    }

    .inner {
      overflow: hidden;
    }

    .inner img {
      transition: all 0.5s ease-in-out;
    }

    .inner:hover img {
      transform: scale(1.1);
      background: linear-gradient(rbga(0, 0, 0, 0.5), rbga(0, 0, 0, 0.5));
    }
  `]
})
export class ThemesComponent {
}
