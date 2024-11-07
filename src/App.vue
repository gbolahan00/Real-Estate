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
  font-family: 'montserrat';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

}



nav a {
  text-decoration: none;
  font-weight: bold;
  color: black
}

nav a.router-link-exact-active {
  color: #004E95;
}


body {
  margin: 0;
  padding: 0;
  color: black;
  width: 100%
}

::-webkit-scrollbar {
  display: none;
}

*{
  box-sizing: border-box;
}
</style>
