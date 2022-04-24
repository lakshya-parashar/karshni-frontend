import {Component} from "@angular/core";

@Component({
  selector: 'app-we-design',
  template: `
    <div>
      <div class="container py-4">
        <div class="row">
          <div class="col-lg-3 col-md-3 heading-container" style="padding-top: 2rem;">
            <p class="heading">We Design Every Project As One Off</p>
            <a href="#">
              <img style="width: 10rem;" src="../../../assets/google.png" alt="">
            </a>
          </div>
          <div class="col-lg-9 col-md-9">
            <div class="row">
              <div class="col-lg-4 col-md-4">
                <div class="box d-flex flex-column position-relative">
                  <div class="position-absolute d-center w-100">
                    <div class="d-center flex-column w-75" style="background: white">
                      <h2 style="margin-top: 0.5rem !important;color: #f04e45 !important;font-weight: bold !important;">
                        5+</h2>
                      <p>Years of Experience</p>
                    </div>
                  </div>
                  <img class="img-fluid image" src="../../../assets/Professional_Interior_Services.webp"
                       alt="interior-services-image">
                  <img style="margin: 0 !important;" class="img-fluid" src="../../../assets/silver_divider.webp" alt="">
                  <div class="d-center" style="background: #394159;color: white;padding: 1rem 0;">
                    <p class="text-center" style="margin: 0 !important; font-size: 1.2rem">Professional Interior
                      Services</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="box d-flex flex-column position-relative">
                  <div class="position-absolute d-center w-100">
                    <div class="d-center flex-column w-75" style="background: white">
                      <h2 style="margin-top: 0.5rem !important;color: #f04e45 !important;font-weight: bold !important;">
                        2000+</h2>
                      <p>Customers</p>
                    </div>
                  </div>
                  <img class="img-fluid image" src="../../../assets/Full_Service_Offering.webp"
                       alt="interior-services-image">
                  <img style="margin: 0 !important;" class="img-fluid" src="../../../assets/silver_divider.webp" alt="">
                  <div class="d-center" style="background: #394159;color: white;padding: 1rem 0;">
                    <p class="text-center" style="margin: 0 !important; font-size: 1.2rem">Full Service Offering</p>
                  </div>
                </div>
              </div>
              <div class="col-lg-4 col-md-4">
                <div class="box d-flex flex-column position-relative">
                  <div class="position-absolute d-center w-100">
                    <div class="d-center flex-column w-75" style="background: white">
                      <h2 style="margin-top: 0.5rem !important;color: #f04e45 !important;font-weight: bold !important;">
                        100+</h2>
                      <p>Designers</p>
                    </div>
                  </div>
                  <img class="img-fluid image" src="../../../assets/Design_Talent_Powerhouse.webp"
                       alt="interior-services-image">
                  <img style="margin: 0 !important;" class="img-fluid" src="../../../assets/silver_divider.webp" alt="">
                  <div class="d-center" style="background: #394159;color: white;padding: 1rem 0;">
                    <p class="text-center" style="margin: 0 !important; font-size: 1.2rem">Design Talent Powerhouse</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .heading {
      font-size: 1.5rem;
      font-weight: bold;
    }

    @media screen and (max-width: 992px) {
      .heading-container {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        padding-bottom: 2rem !important;
      }

      .box {
        margin-bottom: 2rem;
      }

      .heading {
        text-align: center;
      }

      .image {
        height: 15.625rem;
        object-fit: cover;
      }
    }
  `]
})
export class WeDesignComponent {
}
