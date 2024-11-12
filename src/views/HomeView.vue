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
  </div>



  

</template>

<script>
export default {
  data() {
    return {
      records: [],
      featuredProperties: [],
    };
  },

  mounted() {
    fetch('http://localhost:3000/records') 
    .then(res => res.json())
    .then(data => this.records = data)

    fetch('http://localhost:3000/featuredProperties') 
    .then(res => res.json())
    .then(data => this.featuredProperties = data)
  }
};

</script>
