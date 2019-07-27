import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import VueRouter from 'vue-router'
Vue.use(Vuex)
Vue.use(VueRouter)

export default new Vuex.Store({
  state: {
      packageList:[],
      showing:'All',
      pacakage:{
        id:0,
        customerName:"",
        phoneNumber:"",
        status:0,
        appoinmentTime:0
      }
  },
  mutations: {
    filter_all(state){
      state.showing='All'
    },
    filter_reserved(state){
      state.showing='Appointed'
    },
    filter_not_reserved(state){
      state.showing='Unappoint'
    },
    filter_picked(state){
      state.showing='Fetched';
    },
    initItem(state,payload){
      payload.data.map(item=>{
        switch(item.status){
          case(1):item.status='已取件';break;
          case(2):item.status='已预约';break;
          case(3):item.status='未预约';break;
        }
      })
      state.packageList=payload.data;
    },
    confirmFetch(state,index){
      state.packageList[index].status='已取件';
    },
    addSuccess(){
      this.$Message.info('This is a info tip');
    }
  },

  actions: {
    initItem(context){
      axios.get('http://localhost:8088/express-packages')
      .then((response)=>{
        context.commit('initItem',response)
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    confirmFetch(context,index){
      axios.put('http://localhost:8088/express-packages/'+context.state.packageList[index].id,{"status":1})
      .then((response)=>{
        context.commit('confirmFetch',index)  
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    },
    addPackage(context,pacakage){
      axios.post('http://localhost:8088/express-packages',pacakage)
      .then((response)=>{
        context.commit('addSuccess')  
        console.log(response)
      })
      .catch(function (error) {
        console.log(error);
      })
    }
  }
})