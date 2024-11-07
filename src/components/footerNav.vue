<template>
    <footer class="bg-black text-white">
        <div class="px-5">
            <div class="row align-items-center  p-0 py-4 py-md-5">
                <div class="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
                    <img src="../assets/Frame 1321317847.png" alt="" height="30px">
                </div>

                <div class="col-12 col-md-6 p-0">
                    <div class="d-flex flex-column align-items-center align-items-md-start">
                        <p class="m-0 p-0 ps-md-3 pb-2 fw-bold">Suscribe to Newletter</p>
                        <span class=" d-flex w-100">
                            <input type="search" placeholder="Enter your email address.."
                                class="form-control rounded-0 rounded-start-5 p-lg-2 ps-lg-3">
                            <button class="btn btn-primary rounded-0 rounded-end-5 p-lg-2 px-lg-3">SignUp</button>
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
                                <router-link to="/home">Home</router-link>
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
                <div class="col-12 col-lg-5 ">
                    <div class="row">
                        <div class="col-12">
                            <div class="footer-links">
                                <h4>Address</h4>
                                <p class="">
                                    PlotVista Headquarters15 Olusegun Obasanjo Road,Victoria Island, Lagos, Nigeria.
                                </p>
                            </div>
                        </div>
                        <div class="col-12">
                            <div class="col-12 mb-3 mb-md-5 ">
                                <div class="footer-email">
                                    <h4>Email</h4>
                                    <p class="f">info@plotvista.com</p>
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="footer-social">
                                    <h4>Social Media Links</h4>
                                    <i class="bi bi-facebook p-2"></i>
                                    <i class="bi bi-twitter  p-2"></i>
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
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
        };
    },
};
</script>


