<template>
<div class="navbar">
  <nav class="nav-extended indigo darken-2">
    <div class="nav-content">
      <router-link :to="{ name:'home' }">
        <span class="nav-title">Project CRUD</span>
      </router-link>
      <a href="" class="btn-floating btn-large halfway-fab pink">
        <router-link :to="{ name:'add' }">
          <i class="material-icons">add</i>
        </router-link>
      </a>
    </div>
  </nav>
</div>
</template>


<script>
export default {
  name:'Navbar',

  data(){
    return {

    }
  }
}
</script>


<style lang="scss">
  .navbar {
    .nav-title {
      padding:20px;
    }
  }
</style>

