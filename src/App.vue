<template>
  <div id="app">
    <navbar />
    <router-view/>
  </div>
</template>


<script>
import Navbar from '@/views/Navbar';

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>


<style lang="scss">
@import '~styles/materialize';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
