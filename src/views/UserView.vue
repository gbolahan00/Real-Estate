<template>
  
      <section class="user-hero-section">

      <div class="content">

        <h1 class="text-center fw-bolder">
            Find Your Ideal Plot: Search by Location, Size, and Price
        </h1>

        <p class="text-center ">
            Refine Your Search to Find the Perfect Plot
        </p>


        <div class="input py-4">
            
            <div class="input-group input-group-lg">
                

                <span class="input-group-text bg-white rounded-start-5">
                    <i class="bi bi-search"></i>
                </span>

            
                <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control border-start-0"
                    placeholder="Search..."
                >

                
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    {{ selectedLocation || 'Location' }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="location in locations" :key="location">
                    <a class="dropdown-item" href="#" @click.prevent="selectedLocation = location">{{ location }}</a>
                    </li>
                </ul>

                
                <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    {{ selectedSize || 'Size' }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="size in sizes" :key="size">
                    <a class="dropdown-item" href="#" @click.prevent="selectedSize = size">{{ size }}</a>
                    </li>
                </ul>

                
                <button class="btn btn-primary dropdown-toggle rounded-end-5" type="button" data-bs-toggle="dropdown">
                    {{ selectedPrice || 'Price' }}
                </button>
                <ul class="dropdown-menu">
                    <li v-for="range in priceRanges" :key="range">
                    <a class="dropdown-item" href="#" @click.prevent="selectedPrice = range">{{ range }}</a>
                    </li>
                </ul>

            </div>

            

        </div>

      </div>

    </section>


</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      selectedLocation: '',
      selectedSize: '',
      selectedPrice: '',
      locations: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Miami'],
      sizes: ['Small', 'Medium', 'Large', 'Extra Large'],
      priceRanges: ['$0-$50', '$50-$100', '$100-$200', '$200+']
    }
  },
  watch: {
    searchQuery(newVal) {
      this.handleSearch()
    },
    selectedLocation(newVal) {
      this.handleSearch()
    },
    selectedSize(newVal) {
      this.handleSearch()
    },
    selectedPrice(newVal) {
      this.handleSearch()
    }
  },
  methods: {
    handleSearch() {
      // Emit search event with current filter values
      this.$emit('search', {
        query: this.searchQuery,
        location: this.selectedLocation,
        size: this.selectedSize,
        price: this.selectedPrice
      })
    }
  }
}
</script>

<style>

</style>