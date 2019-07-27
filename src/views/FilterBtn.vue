<template>
    <center><div class="home" style="margin-top: -120px;"> 
    <h2><span style="margin-left: -1009px;">菜鸟驿站</span></h2> 
    <el-row>
        <el-button type="info" round  @click="filter_all">All</el-button>
        <el-button type="info" round  @click="filter_reserved">已预约</el-button>
        <el-button type="info" round  @click="filter_picked">已经取件</el-button> 
        <el-button type="info" round  @click="filter_not_reserved">未预约</el-button> 
        <el-button type="warning"><router-link to="/addInfo" @click="addItem">添加</router-link></el-button>
    </el-row>
    </div></center> 
</template>

<script>
export default {
    name:"filterBtn",
    methods:{
        filter_all(){
            this.$store.commit('filter_all');      
        },
        filter_reserved(){
            this.$store.commit('filter_reserved');  
        },
        filter_picked(){
            this.$store.commit('filter_picked');
        },
        filter_not_reserved(){
            this.$store.commit('filter_not_reserved')
        },
        addItem(){
            this.$store.dispatch('addItem');
        }
    }
}
</script>
