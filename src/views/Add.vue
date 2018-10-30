<template>
  <div class="add container">
    <h2 class="center-align indigo-text">Add new card</h2>

    <card-form @submit="addCard" />
  </div>
</template>


<script>
import db from '@/firebase/init';
import CardForm from '@/components/CardForm';

export default {
  name:'Add',

  components: {
    CardForm,
  },

  methods: {
    addCard({ title, list }) {
        const regex1 = /[$*_+~.()'"!\-:@]/g; //different chars to be removed
        const regex2 = /\s+/g; //replace all occurances of 1 or more spaces with -
        
        //update db
        db.collection('Cards').add({
          title,
          list,
          slug: title.toLowerCase().replace(regex1,'').replace(regex2, '-'), 
        })
        .then(() => {
          this.$router.push({ name:'home' });
        })
        .catch(err => {
          console.log(err);
        })
    },
  }
}
</script>


<style lang="scss">
  .add {
    margin-top:60px;
    padding:20px;
    max-width: 500px;

    h2 {
      font-size:2rem;
      margin:20px auto;
    }

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
  }
</style>

