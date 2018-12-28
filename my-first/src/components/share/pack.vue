<template>
    <div>
      <div>
        {{$t("pack.title")}}
      </div>
      <div>
        <input type="text" :placeholder="$t('pack.placeholder')">
      </div>
      <div>
        <button @click="search">查询</button>
      </div>
      <div v-for="item in all" :key="item.bookname">
          <box :msg='item'></box>
      </div>
    </div>
</template>
<script>
import {mapState,mapMutations,mapActions,mapGetters} from 'vuex'
import box from './box.vue'
  export default {
    data () {
      return {

      }
    },
    components:{
      box
    },
    computed: {
      ...mapState('book',['all'])
    },
    methods: {
        search(){
          this.$http.get('/api/novelApi').then(res=>{
            console.log(res.data)
            this.bookNum(res.data)

          })
        },
        ...mapActions('book',['ansyNum']),
        ...mapMutations('book',['bookNum'])
    },
    mounted () {
        console.log(this.$route)

    },
    created(){

    }
  }
</script>
