//引入我们的vue和vuex。
import Vue from 'vue'
import Vuex from 'vuex'
//使用我们vuex，引入之后用Vue.use进行引用
Vue.use(Vuex);

const state = {
    count:1
 }
 
 const mutations={
     add(state){
         state.count+=1;
     },
     reduce(state){
         state.count-=1;
     }
 }
 const getters = {
    count:function(state){
        return state.count +=100;
    }
}
 export default new Vuex.Store({
     state,mutations
 });
 