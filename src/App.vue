<template>
  <div id="app">

      <el-row class="tac">
       <el-col :span="3">
      <el-menu
      default-active="2"  
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose">
      <el-menu-item index="1">
        <template slot="title">
        <i class="el-icon-location"></i>
        <router-link to="/">首页</router-link> 
        </template>
        </el-menu-item>

        <el-menu-item index="2">

        <i class="el-icon-menu"></i>
          <!-- <router-link to="/about">其他服务</router-link> -->
          其他服务
          <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/pageStored">包裹入库</router-link></el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
          <el-menu-item index="1-1"><router-link to="/fetchPackage">预约取件</router-link></el-menu-item>
          </el-menu-item-group>

      </el-menu-item>
      </el-menu>
       </el-col>
</el-row>

    <router-view/> 
  </div>
</template> 

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
