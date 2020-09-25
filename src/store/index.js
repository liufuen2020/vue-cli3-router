import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
    state:{
        users:JSON.parse(localStorage.getItem("users"))
        || {
          token:"",
          userName:""
        }
    },
    mutations:{
        getParam (state,payload){
            state.user = payload
        }
    }
})

export default store
