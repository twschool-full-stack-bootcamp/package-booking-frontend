<template>
    <center><div class="home" style="margin-top: -120px;">   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span style="margin-top:30px;">菜鸟驿站</span> 
    <el-row>
        <el-button type="info" round  @click="filter_all">All</el-button>
        <el-button type="info" round  @click="filter_reserved">已预约</el-button>
        <el-button type="info" round  @click="filter_picked">已经取件</el-button> 
        <el-button type="info" round  @click="filter_not_reserved">未预约</el-button> 
        <el-button type="warning"><router-link to="/addInfo">添加</router-link></el-button>
    </el-row>
    </div></center>
</template>

<script>
export default {
    name:"filterBtn",
    methods:{
        filter_all(){
            this.$store.commit('showAll');
        },
        filter_reserved(){
            this.$store.commit('showAppointed');
        },
        filter_picked(){
            this.$store.commit('showFetched');
        },
        filter_not_reserved(){
            this.$store.commit('showUnappoint')
        },
        addItem(){
            this.$store.dispatch('addItem');
        }
    }
}
</script>
