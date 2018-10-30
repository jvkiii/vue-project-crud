<template>
  <transition name="card" appear>
    <div class="card">
      <div class="card-content">

        <i class="delete material-icons" @click="deleteCard(id)">delete</i>

        <h2 class="indigo-text">{{ title }}</h2>
        
        <ul class="item-list">
          <li v-for="(item, index) in list" :key="index">
            <span class="chip">{{ item }}</span>
          </li>
        </ul>
      </div>

      <router-link 
        :to="{ name:'edit', params:{ slug }}"
        class="btn-floating halfway-fab pink">
        <i class="material-icons edit-icon">edit</i>
      </router-link>
    </div>
  </transition>
</template>


<script>
export default {
  name:'Card',

  props: {
    //card obj contents
    id: { type:String, required:true },
    title: { type:String, required:true },
    slug: { type:String, required:true },
    list: { type:Array, required:true },
    //passed handler
    deleteCard: { type:Function, required:true },
  }
}
</script>


<style lang="scss">
  .card {
    h2 {
      font-size:1.8rem;
      text-align:center;
      margin-top:0;
    }
    
    .item-list {
      margin:30px auto;

      li { display:inline-block; }
    }

    .delete {
      position:absolute;
      top:4px; right:4px;
      cursor:pointer;
      color: #aaa;
      font-size: 1.4rem;
    }

    .edit-icon {
      padding: 0 9px;
    }

    opacity:1;
    transform: translateY(0);
    transition: transform 0.3s, opacity 0.3s;
    &.card-enter, &.card-leave-to {
      opacity:0;
      transform:  translateY(10px);
    }
  }
</style>
