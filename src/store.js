import Vue from 'vue'
import Vuex from 'vuex'
import {getAllPackages,addOrder}  from './axios/api.js'  

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      luggages: []
  },
  mutations: {
      resourceData (state,luggages)
      {
        state.luggages.push(luggages)
      },
      addData(state,luggages){
        state.luggages.push(luggage)
      }
  },
  getters:{
    selectLuggage:(state,status)=>{
      return state.luggage.filter(mm => mm.status == status)
    }
  },
  actions: {
      getData({commit}){
        getAllPackages.then(mm =>commit(resourceData),mm.data).catch(error => console.log(error))
      }  
  }
})

