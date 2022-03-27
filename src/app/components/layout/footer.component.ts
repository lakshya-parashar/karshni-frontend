import {Component} from "@angular/core";

@Component({
  selector: 'app-footer',
  template: `
    <section fxLayout="row" fxLayoutAlign="center center">
      <div class="content-container" style="width: 100%" fxLayout="row" fxLayoutAlign="center center">
        <div class="first" style="width: 100%" fxLayout="row" fxLayoutAlign="space-around">
          <div class="first-list give-padding">
            <h2>Company</h2>
            <ul style="padding: 0">
              <li><a href="#">Home</a></li>
              <li><a href="#">How It Works</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Portfolio</a></li>
              <li><a href="#">Team</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
          <div class="second-list give-padding">
            <h2>Social Media</h2>
            <ul style="padding: 0">
              <li><a href="#">
                <i class="fa-brands fa-facebook-f"></i>
                Facebook
              </a></li>
              <li><a href="#">
                <i class="fa-brands fa-linkedin-in"></i>
                Linked In
              </a></li>
              <li><a href="#">
                <i class="fa-brands fa-instagram"></i>
                Instagram
              </a></li>
              <li><a href="#">
                <i class="fa-brands fa-youtube"></i>
                Youtube
              </a></li>
            </ul>
          </div>
          <div class="newsLetter give-padding" style="width: 40%;" fxLayout="column" fxLayoutGap="1.2rem">
            <h2>Studio KAi</h2>
            <div class="input" style="position:relative;" fxLayout="row" fxLayoutAlign="start center">
              <input placeholder="Subscribe Newsletter"/>
              <button class="btn">Subscribe Now</button>
            </div>
            <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    section {
      background: #28313b;
      background-image: url('../../../assets/banner-shape.png');
      background-image: url('../../../assets/banner-shape.png'), linear-gradient(#28313b, #28313b);
      color: white;
      padding: 2rem;
    }

    .first {
      flex-wrap: wrap;
    }

    a {
      color: white;
      text-decoration: none;
    }

    li {
      list-style: none;
      line-height: 2rem;
    }

    input {
      font-size: 1rem;
      border: 1px solid transparent;
      padding: 1rem;
      border-radius: 2rem;
      outline: none;
      padding-right: 10.5rem;
      width: 100%;
    }

    .btn {
      position: absolute;
      padding: 0.7rem 2rem;
      border-radius: 2rem;
      border: 1px solid #6caaa8;
      background: #6caaa8;
      color: white;
      cursor: pointer;
      right: 10px;
    }

    .first-list {
      flex-wrap: wrap;
    }

    .give-padding {
      padding: 2rem;
    }

    i {
      padding-right: .5rem;
    }

    @media screen and (max-width: 1100px) {
      .first {
        width: 100% !important;
        place-content: flex-start !important;
      }

      .newsLetter {
        width: 35rem !important;
      }

      section {
        padding: 0;
      }
    }

    @media screen and (max-width: 599px) {
      .btn {
        padding: 0.7rem 0.5rem;
      }

      input {
        padding-right: 8.5rem;
      }
    }

    @media screen and (max-width: 425px) {
      .card {
        width: 90%;
      }
    }
  `]
})
export class FooterComponent {
}
