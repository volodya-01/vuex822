<template>
  <div class="hello">
      <h2>{{msg}}</h2>
        <hr/>
        <!-- <h3>{{$store.state.count}}</h3> -->
        <h3>{{count}}</h3>
        <div>
            <button @click="$store.commit('add')">+</button>
            <button @click="$store.commit('reduce')">-</button>
            
        </div>
        
  </div>
</template>

<script>
//引入store文件
import store from "@/store/store.js";
//import { mapState } from "vuex"; //用import引入mapState。
import { mapState,mapMutations } from 'vuex';
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  /* computed:{
         count(){
             return this.$store.state.count;
         }
     }, */
  //computed:mapState({
  //count:state=>state.count  //理解为传入state对象，修改state.count属性
  // }),
  computed: mapState(["count"]),
/*  computed:{
    ...mapState(["count"]),
    count(){
        return this.$store.getters.count;
    }
}, */
  store,

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
