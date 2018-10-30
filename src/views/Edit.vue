<template>
  <div class="edit-page container">
    <h2 class="center-align indigo-text">Edit card</h2>

    <card-form 
      v-if="card"
      :title="card.title"
      :list="card.list"
      @submit="editCard"
    />
  </div>
</template>


<script>
import db from '@/firebase/init';
import CardForm from '@/components/CardForm';

export default {
  name:'Edit',

  components: {
    CardForm,
  },

  data(){
    return {
      card:null,
      curItem:'',
      feedback:null,
    }
  },

  methods: {
    editCard({ title, list }) {
      const regex1 = /[$*_+~.()'"!\-:@]/g; //different chars to be removed
      const regex2 = /\s+/g; //replace all occurances of 1 or more spaces with -
      
      //update db
      db.collection('Cards').doc(this.card.id).update({
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
  },

  created() {
    const { slug } = this.$route.params;
    const ref = db.collection('Cards').where('slug', '==', slug);

    //get card info from db
    ref.get().then(snapshot => {
      if (snapshot.size === 1) {
        this.card = snapshot.docs[0].data();
        this.card.id = snapshot.docs[0].id;
      } else {
        console.log('db returned multiple cards');
      }
    })
  },
}
</script>


<style lang="scss">
  .edit-page {
    margin-top:60px;
    padding:20px;
    max-width: 500px;

    h2 {
      font-size:2rem;
      margin:20px auto;
    }
  }
</style>

