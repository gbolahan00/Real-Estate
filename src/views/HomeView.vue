<template>
  <div>
    <section class="hero-section">

      <div class="content">

        <h1 class="text-center fw-bolder">Your Journey to Land Ownership Starts Here</h1>

        <p class="text-center ">Maximize returns with strategically located plots offering long-term growth
          potential
        </p>


        <div class="input">

          <input type="search" placeholder="Search Plot by Price, Location, Size e.t.c"
            class="form-control rounded-pill px-md-5 ps-5  py-2 hero-input">

          <button class="btn rounded-pill ps-md-4 ps-lg-3 py-2 hero-icon">
            <i class="bi bi-search text-black"></i>
          </button>

          <button class="btn btn-primary rounded-pill px-lg-5 py-2 hero-btn">Search
          </button>

        </div>

      </div>

    </section>

    <section class=" section-2">
      <div class="records">
        <div class="d-flex justify-content-around text-center stats">
          <div v-for="record in records" :key="record.id">
            <p class="fw-bold number">{{ record.number }}</p>
            <p class="stats">{{ record.stats }}</p>
          </div>
        </div>
      </div>

      <div class="featured-properties">
        <div class="heading">
          <h3 class="fw-bolder">Featured Properties</h3>
          <p class="">Explore Exclusive Featured Properties</p>
        </div>

        <div class="featured-properties-card">
          <div class="cards" v-for="featuredProperty in featuredProperties" :key="featuredProperty.id">
            <div class="card-badges">
              <img :src="require('../assets/' + featuredProperty.image)" class="img" alt="Featured property image"/>
              <img src="../assets/love.png"  class=" like-icon">

              <img v-if="featuredProperty.rating <= 4" src="../assets/fire.png"  class=" fire-icon">
              <img v-else-if="featuredProperty.rating >= 4.1" src="../assets/flash.png"  class=" flash-icon">
              
            </div>
            <div class="card-body">
              <div class="title">
                <span>{{ featuredProperty.name }}</span>
                <span>
                  <i class="bi bi-star-fill icon"></i> {{ featuredProperty.rating }}
                </span>
              </div>
              <p class="text">{{ featuredProperty.description }}</p>
              <div class="price">
                <span>{{ featuredProperty.price }}</span>
                <button class="btn">Buy Plot</button>
              </div>
            </div>
          </div>
        </div>

      </div>


    </section>

    <section class="section-3">
      <div class="latest-listing">
        <div class="heading">
          <h3 class="fw-bolder">Latest Listing</h3>
          <p class="">Check Out Our Latest Plot Listings</p>
        </div>

        <div class="latest-listing-card">
          <div class="cards" v-for="latestListing in latestListings" :key="latestListing.id">
              <div class="card-badges">
                <img :src="require('../assets/' + latestListing.image)" class="img" alt="Featured property image"/>
                <img src="../assets/love.png"  class=" like-icon">
                <button class="newest-btn">Newest</button>
                <span class="title">{{ latestListing.name }}</span>

              </div>
              <div class="card-body">
                
                <p class="location">Location: <span class="text">{{ latestListing.location }}</span></p>
                <div class="price">
                  <span class="d-flex flex-column  " >
                    <p>Size: <span class="text mb-1">{{ latestListing.size }}</span></p>
                    <p>Price: <span class="text">{{ latestListing.price }}</span></p>
                  </span>
                  <button class="btn">View Plot</button>
                </div>
              </div>
          </div>
        </div>
        <div class="view-all">
          <button class="all-plots-btn">View All Plots</button>
          <button class="contact-btn">Contact Us</button>
        </div>
      </div>
    </section>

    <section class="section-4">

      <div class="row why-choose-us align-items-center justify-content-between">

        <div class="heading">
          <h3 class="fw-bolder">Why Choose Us</h3>
        </div>
        <div class="col-12 col-lg-6">
          <div class="body">
            <p>At PlotVista, we specialize in connecting buyers with premium real estate plots across Nigeria. With a focus on transparency, quality, and customer satisfaction, we provide a seamless experience for those looking to invest in land for residential, commercial, or investment purposes. Our team of experts is dedicated to helping you find the perfect plot that meets your unique needs and aspirations.</p>
          </div>
           <div class="about-us">
            <button class="about-us-btn d-none d-md-block">About Us</button>
          </div>
        </div>
        <div class="col-12 col-lg-5 about-img">
          <img src="../assets/About.png" alt="" class="img-fluid">
        </div>
        
      </div>
    </section>

    <section class="section-5">
      <div class="testimonials">
        <div class="heading ">
          <h3 class="fw-bolder">Testimonials</h3>
        </div>

        <div class="testimonial-container">
          <div class="testimonial-card" v-for="testimonial in testimonials" :key="testimonial.id">
            <div class="testimonial-img">
             <img :src="require('../assets/' + testimonial.image)" class="testimonial-image" alt="Featured property image" />
            </div>
            <div class="testimonial-body">
               <p class="testimonial-review">{{ testimonial.review }}</p>
               <p class="testimonial-location">{{ testimonial.location }}</p>
            </div>  
          </div>
        </div>
      </div>
    </section>

    <section class="section-6">
      <div class="faq">
        <div class="heading">
          <h3 class="fw-bolder">Frequently Asked Questions</h3>
        </div>

        <div class="faq-container">
          <div v-for="(item, index) in faqs" :key="index" class="faq-item p-2 p-md-3 mb-1 mb-md-3">
            <div class="question d-flex justify-content-between align-items-center" @click="toggleFAQ(index)">
              <h5>{{ item.question }}</h5>
              <span>{{ item.open ? '-' : '+' }}</span>
            </div>
            <transition name="faq">
              <div class="answer" v-if="item.open">
                <p>{{ item.answer }}</p>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </section>

    <section class="section-7">
      <div class="contact">
        <div class="heading">
          <h3 class="fw-bolder">Contact Us</h3>
        </div>

        <div class="contact-container">
          <div class="row">
          <div class=" col-12 col-md-5">
            <div class="phoneNum card rounded-4 mb-3 p-3 shadow">
              <h5 class="mb-2">Phone Number</h5>
              <ul class="list-unstyled ms-3">
                <li> +1 (555) 123-4567</li>
                <li> +1 (555) 123-4567</li>
                <li> +1 (555) 123-4567</li>
              </ul>
            </div>

            <div class="email card rounded-4 mb-3 p-3 shadow">
              <h5 class="mb-2">Email Address</h5>
              <ul class="list-unstyled ms-3">
                <li> info@plotvista.com</li>
                <li> support@plotvista.com</li>
              </ul>
            </div>

            <div class="HQ card rounded-4 mb-3 p-3 shadow">
              <h5 class="mb-2">HeadQuaters</h5>
              <ul class="list-unstyled ms-3">
                <li>PlotVista Headquarters15 Olusegun Obasanjo Road,Victoria Island, Lagos,Nigeria.Phone: +234 810 123 4567Email: info@plotvista.com</li>
              </ul>
            </div>
          </div>


          <div class="col-12 col-md-7">

             <form class="form-control p-4 rounded-4 shadow">

              <div class="mb-3">
                <label for="name" class="form-label">Name</label>
                <input type="text" class="form-control" id="name" placeholder="Enter your name">
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Enter your email">
              </div>

              <div class="mb-3">
                <label for="phone" class="form-label">Phone Number</label>
                <input type="tel" class="form-control" id="phone" placeholder="(+234)">
              </div>
              
              <div class="mb-3">
                <label for="Message" class="form-label">Message</label>
                <textarea name="message" id="message" rows="5" class="form-control">type your message...</textarea>
              </div>

              <div class="text-center">
              <button type="submit" class="btn btn-primary">Send Message</button>
              </div>
            </form>    
            
          </div>
        </div>

        </div>
      </div>  
    </section>

  </div>





</template>

<script>
export default {
  name: "home",
  data() {
    return {
      records: [
        {
              "id": 1,
              "number": "18+",
              "stats": "Satisfied Clients"
          },
          {
              "id": 2,
              "number": "10K+",
              "stats": "Plots Delivered"
          },
          {
              "id": 3,
              "number": "10+",
              "stats": "Years of Experience"
          }
      ],
      featuredProperties: [
         {
            "id": 1,
            "image": "Greenland Acres.png",
            "like": "love.png",
            "name": "Greenland Acres",
            "rating": "4.0",
            "price": "₦5,000,000",
            "location": "Lagos, Nigeria",
            "description": "Nestled near serene rolling hills, Greenhaven Acres offers expansive plots perfect for your dream home. "
        },
        {
            "id": 2,
            "image": "Suncrest Estates.png",
            "like": "love.png",
            "name": "Suncrest Estates",
            "rating": "4.0",
            "price": "₦8,500,000",
            "location": "Abuja, Nigeria",
            "description": "Suncrest Estates boasts sun-drenched plots with breathtaking views of the countryside"
        },
        {
            "id": 3,
            "image": "RiverStone Valley.png",
            "like": "love.png",
            "name": "RiverStone Valley",
            "rating": "4.8",
            "price": "₦7,200,000",
            "location": "Ogun, Nigeria",
            "description": "Located near a tranquil riverbank, Riverstone Valley features premium plots ideal for nature lovers"
        }
      ],
      latestListings: [
        {
            "id": 1,
            "image": "Victoria Crest.png",
            "like": "love.png",
            "name": "Victoria Crest",
            "location": "Victoria island, Lagos",
            "price": "₦150,000,000",
            "size": "900 sqm"
        },
        {
            "id": 2,
            "image": "Emerald Gardens.png",
            "like": "love.png",
            "name": "Emrald Gardens",
            "location": "Gwarimpa, Abuja",
            "price": "₦40,000,000",
            "size": "1,000 sqm"
        },
        {
            "id": 3,
            "image": "Eko Pearl Estate.png",
            "like": "love.png",
            "name": "Eko Pearl Estate",
            "location": "Eko Atlantic, Lagos",
            "price": "₦180,000,000",
            "size": "1,200 sqm"
        },
        {
            "id": 4,
            "image": "Amber Heights.png",
            "like": "love.png",
            "name": "Amber Heights",
            "location": "Wuse II, Abuja",
            "price": "₦80,000,000",
            "size": "1,100 sqm"
        }
      ],
      testimonials: [
        {
            "id": 1,
            "image": "Chinedu Reviews.png",
            "name": "Chinedu .O.",
            "location": "Lagos, Nigeria",
            "rating": "5.0",
            "review": "PlotVista made buying my first plot in Lagos a breeze! The interactive maps and detailed property information helped me make an informed decision. The team was incredibly supportive throughout the process. I highly recommend them to anyone looking to invest in land."
        },
        {
            "id": 2,
            "image": "Fatima reviews.png",
            "name": "Fatima .A.",
            "location": "Abuja, Nigeria",
            "rating": "4.8",
            "review": "I was looking for a plot to build my dream home, and PlotVista delivered exactly what I needed. The transparency in pricing and the professional advice from their team gave me complete confidence. I’m thrilled with my purchase!"
        },
        {
            "id": 3,
            "image": "Bayo reviews.png",
            "name": "Bayo .G.",
            "location": "Lagos, Nigeria",
            "rating": "4.5",
            "review": "The convenience of browsing plots on PlotVista is unmatched. From virtual tours to detailed descriptions, everything was easy to navigate. The customer service team was also fantastic in answering all my questions. I’ll definitely use PlotVista again for future investments."
        }
      ],
      faqs: [
        {
            "id": 1,
            "question": "How do I search for available plots on PlotVista?",
            "answer": "To search for available plots on PlotVista, go to the website and use the search feature by entering keywords like location, plot size, or price range. You can further filter results by criteria such as plot type or proximity to amenities. Browse through the listings to view detailed information and images of matching plots. If you find one that interests you, save it to your favorites or contact the PlotVista team for more information. This streamlined process makes it easy to find and explore available plots on PlotVista.",
            "open": false
        },
        {
            "id": 2,
            "question": "Are the prices listed negotiable?",
            "answer": "Yes, in many cases, the prices listed on PlotVista are negotiable. However, this can vary depending on the seller and specific plot. For more details or to discuss pricing, it’s best to contact the PlotVista team or the listing agent directly, as they can provide guidance on negotiation options for a particular property.",
            "open": false
        },
        {
            "id": 3,
            "question": "Can I schedule a site visit to see the plot in person?",
            "answer": "Yes, you can schedule a site visit to see the plot in person. PlotVista offers the option to arrange visits for interested buyers. Simply contact the PlotVista team or the listing agent through the website to set up a convenient date and time for your visit. This allows you to get a closer look and make a more informed decision about the property.",
            "open": false
        },
        {
            "id": 4,
            "question": "How do I know the plots are legally available for sale?",
            "answer": "PlotVista ensures that all listed plots are legally available for sale by conducting thorough verification processes. Each plot undergoes a legal review to confirm clear ownership, proper documentation, and compliance with local regulations. Additionally, you can request to view the legal documentation or consult with a legal professional for extra assurance.",
            "open": false
        },
        {
            "id": 5,
            "question": "What is the process for purchasing a plot on PlotVista?",
            "answer": "To purchase a plot on PlotVista, simply click the 'Buy Now' button on the listing page. You will be redirected to the checkout page where you can review the details of your purchase and enter your payment information. Once you complete the payment, your order will be processed, and you will receive confirmation of your purchase.",
            "open": false
        },
        {
            "id": 6,
            "question": "How long does it take to complete the purchase process?",
            "answer": "The purchase process typically takes less than 24 hours from the moment you place your order. However, it may take longer in some cases, such as during peak hours or holidays.",
            "open": false
        },
        {
            "id": 7,
            "question": "What payment methods are accepted?",
            "answer": "PlotVista accepts a variety of payment methods to ensure flexibility for buyers, including bank transfers, cheques (subject to prior arrangement), online payments via credit or debit cards, and in some cases, cash payments. For more details on specific payment options and any associated plans, it’s advisable to contact the PlotVista team directly.",
            "open": false
        },
        {
            "id": 8,
            "question": "Can I reserve a plot and pay later?",
            "answer": "Yes, PlotVista offers the option to reserve a plot and pay later, depending on the specific terms and conditions of the listing. Typically, a reservation fee may be required to secure the plot, with the remaining balance due within an agreed-upon time frame. It's important to discuss the payment schedule and reservation terms with the PlotVista team or the listing agent to ensure you understand the process and deadlines.",
            "open": false
        }
      ],
    };
  },

  methods: {
    toggleFAQ(index) {
      this.faqs[index].open = !this.faqs[index].open;
    },
  },

  // mounted() {
  //   fetch('http://localhost:3000/records') 
  //   .then(res => res.json())
  //   .then(data => this.records = data)

  //   fetch('http://localhost:3000/featuredProperties') 
  //   .then(res => res.json())
  //   .then(data => this.featuredProperties = data)

  //   fetch('http://localhost:3000/LatestListings')
  //   .then(res => res.json())
  //   .then(data => this.latestListings = data)
    
  //   fetch('http://localhost:3000/testimonials')
  //   .then(res => res.json())
  //   .then(data => this.testimonials = data)

  //   fetch('http://localhost:3000/faqs')
  //   .then(res => res.json())
  //   .then(data => this.faqs = data)
  // }
};



</script>
