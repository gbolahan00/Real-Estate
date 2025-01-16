<template>
  <footer class="bg-black text-white">
    <div class="px-5">
      <div class="map-container m-0 p-0">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63384.90582258361!2d3.8826508634111168!3d6.823653302465484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103968a66d1a278b%3A0xbc9c567eae180351!2sIjebu%20Ode%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1734432999718!5m2!1sen!2sng"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <div class="row align-items-center m-0 p-0 mb-5">
        <div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
          <img src="../assets/Frame 1321317847.png" alt="" height="30px" />
        </div>

        <div class="col-12 col-md-6 p-0">
          <div class="d-flex flex-column align-items-center align-items-md-start">
            <p class="m-0 p-0 ps-md-3 pb-2 fw-bold">Subscribe to Newsletter</p>
            <span class="d-flex w-100">
              <input
                type="search"
                placeholder="Enter your email address.."
                class="form-control rounded-0 rounded-start-5 p-lg-2 ps-lg-3"
              />
              <button class="btn btn-primary rounded-0 rounded-end-5 p-lg-2 px-lg-3">
                SignUp
              </button>
            </span>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-12 col-lg-7 mb-5 mb-md-5">
          <div class="row">
            <div class="col-12 col-md-4 p-0 pb-3 pb-md-0">
              <div class="footer-links">
                <h4>Company</h4>
                <router-link to="/">Home</router-link>
                <router-link to="/plots">Plots</router-link>
                <router-link to="/about">About</router-link>
                <router-link to="/contact">Contact</router-link>
              </div>
            </div>
            <div class="col-12 col-md-4 p-0 pb-3 pb-md-0">
              <div class="footer-links">
                <h4>Help</h4>
                <a href="#">Contact Us</a>
                <a href="#">FAQs</a>
                <a href="#">Live Chat Support</a>
                <a href="#">Legal Information</a>
              </div>
            </div>
            <div class="col-12 col-md-4 p-0">
              <div class="footer-links">
                <h4>Resources</h4>
                <a href="#">Blog</a>
                <a href="#">Market Trend</a>
                <a href="#">Live Chat Support</a>
                <a href="#">Legal Information</a>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <div class="row">
            <div class="col-12">
              <div class="footer-links">
                <h4>Address</h4>
                <p>
                  PlotVista Headquarters 15 Olusegun Obasanjo Road, Victoria
                  Island, Lagos, Nigeria.
                </p>
              </div>
            </div>
            <div class="col-12">
              <div class="col-12 mb-3 mb-md-5">
                <div class="footer-email">
                  <h4>Email</h4>
                  <p>info@plotvista.com</p>
                </div>
              </div>
              <div class="col-12">
                <div class="footer-social">
                  <h4>Social Media Links</h4>
                  <i class="bi bi-facebook p-2"></i>
                  <i class="bi bi-twitter p-2"></i>
                  <i class="bi bi-instagram p-2"></i>
                  <i class="bi bi-linkedin p-2"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-bottom text-center">
        <p>&copy; {{ currentYear }} PlotVista. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const currentYear = ref(new Date().getFullYear());
    return {
      currentYear,
    };
  },
};
</script>
