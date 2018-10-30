
<template>
  <transition name="form" appear>
    <form class="card-form"  @submit.prevent="onSubmit">
      <div class="field title">
        <label for="title">Card Title:</label>
        <input type="text" name="title" v-model="curTitle">
      </div>

      <div class="field add-item">
        <ul class="item-list">
          <li v-for="(item, index) in items" :key="index">
            <span class="chip">{{ item }}<i class="close material-icons" @click="removeItem(index)">close</i></span></li>
        </ul>

        <label for="add-item">Add an item:</label>
        <input type="text" name="add-item" v-model="curItem" @keydown.enter.prevent="addItem">
        <button class="btn gray" type="button" @click="addItem">
          <i class="material-icons">add</i>
        </button>
      </div>

      <div class="field center-align">
        <p v-if="feedback" class="red-text">{{feedback}}</p>
        <button type="submit" class="btn pink">Submit Card</button>
      </div>
    </form>
  </transition>
</template>


<script>
export default {
  name:'CardForm',

  props: {
    title: { type:String, default:'' },
    list: { type:Array, default:() => [] },
  },

  data() {
    return {
      curTitle: this.title,
      items: this.list.slice(0),
      curItem:'',
      feedback:null,
    }
  },

  methods: {
    addItem() { 
      if(this.curItem.length > 0) {
        this.items.push(this.curItem);
        this.curItem = '';
        this.feedback = null;
      }
    },

    removeItem(index) {
      this.items.splice(index,1);
    },

    validateCard() {
      this.feedback = 
        (this.items.length === 0 || this.curTitle.length === 0) ? 'Please add a title and at least one item' : null;

      return (this.feedback === null);
    },

    onSubmit() {
      if (this.validateCard()) {
        this.feedback = null;
        this.$emit('submit',{ title:this.curTitle, list:this.items });
      }
    }
  },
}
</script>


<style lang="scss">
  .card-form {
    .field {
      margin:20px auto;
    }
    .field.add-item {
      position:relative;

      .item-list {
        li { display:inline-block; }
        .chip {
          .close { cursor:pointer; }
        }
      }

      input {
        width:calc(100% - 50px);
      }

      .btn {
        position:absolute;
        bottom:8px; right:0;
        max-width:44px;
        padding:0 10px;
      }
    }

    opacity:1;
    transform: translateY(0);
    transition: transform 0.3s, opacity 0.3s;
    &.form-enter, &.form-leave-to {
      opacity:0;
      transform:  translateY(10px);
    }
  }
</style>
