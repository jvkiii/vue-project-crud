<template>
  <div v-if="cards.length > 0" class="home container">

    <card 
      v-for="card in cards" :key="card.id"
      v-bind="card" 
      :deleteCard="deleteCard" />
    
  </div>
</template>


<script>
import db from '@/firebase/init';
import Card from '@/components/Card';

export default {
  name:'Home',

  components: {
    Card,
  },

  data(){
    return {
      cards: []
    }
  },

  methods: {
    deleteCard(id) { 
      //delete document from database
      db.collection('Cards').doc(id).delete()
        .then(() => {
          //remove it locally
          this.cards = this.cards.filter(card => card.id !== id);
        })
    }
  },

  created() {
    db.collection('Cards').get()  //get collection
      .then(snapshot => {         //return snapshot of the collection at this point in time
        snapshot.forEach(doc => { //iterate through each document
          let card = doc.data();
          card.id = doc.id;
          this.cards.push(card);
        })
      })
  }
}
</script>


<style lang="scss">

  .home {
    display:grid;
    grid-template-columns: 1fr;
    margin-top:40px;
    grid-gap: 30px;
    padding-bottom:30px;

    @media only screen and (min-width: 600px) {
      grid-template-columns: 1fr 1fr;
      
    }

    @media only screen and (min-width: 992px) {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
</style>

