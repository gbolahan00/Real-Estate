<template>

  <NavBar />

  <router-view />

  <FooterNav />

</template>

<script>
import NavBar from './components/navBar.vue';
import FooterNav from './components/footerNav.vue';

export default {

  components: {
    NavBar,
    FooterNav,
  }

}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}



nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}


body {
  margin: 0;
  padding: 0;
  color: black;

}

::-webkit-scrollbar {
  display: none;
}
</style>
