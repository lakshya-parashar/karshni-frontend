import {Component} from "@angular/core";

@Component({
  selector: 'app-contact',
  template: `
    <div>
      <app-contanct-hero-main></app-contanct-hero-main>

      <div class="main-container" style="background-color: #f8f9fa!important;">
        <div class="container">
          <h1>SAY <span>HELLO</span></h1>
          <form style="background-color: white">
            <div class="mb-3 form-group">
              <label for="inputPassword5" class="form-label">Full Name</label>
              <input type="text" placeholder="Full Name" id="inputPassword5" class="form-control">
            </div>
            <div class="mb-3 form-group">
              <label for="inputPassword5" class="form-label">Email</label>
              <input type="text" placeholder="Email Address" id="inputPassword5" class="form-control">
            </div>
            <div class="mb-3 form-group">
              <label for="exampleFormControlTextarea1" class="form-label">Message</label>
              <textarea class="form-control" placeholder="Say hello to us" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>
            <button type="submit" class="btn">Send</button>
          </form>
        </div>
      </div>

      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .container {
      padding: 4rem 0;
    }

    label {
      font-weight: bold;
      color: gray;
    }

    form {
      box-shadow: 0 0px 20px rgba(0, 0, 0, 0.2);
      margin-top: 4rem;
      padding: 4rem;
    }
    input {
      padding: .8rem;
    }

    span {
      font-weight: bold;
    }

    button {
      background-color: #98ccd3;
      border: 2px solid #98ccd3;
      cursor: pointer;
      color: #fff;
      border-radius: 0 !important;
      padding: 10px 20px;
      font-size: 1rem;
    }

    button:hover {
      background-color: white;
    }

    @media screen and (max-width: 576px) {
      .main-container {
        padding: 0 1.5rem;
      }

      form {
        padding: 3rem 2rem;
      }
    }
  `]
})
export class ContactComponent {
}
