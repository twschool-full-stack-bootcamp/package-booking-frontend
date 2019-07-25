<template>
  <center><div class="home" style="margin-top: -120px;">   
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <span style="margin-top:30px;">菜鸟驿站</span> 
    <el-row>
        <el-button type="info" round  @click="filter_all">All</el-button>
        <el-button type="info" round  @click="filter_reserved">已预约</el-button>
        <el-button type="info" round  @click="filter_picked">已经取件</el-button> 
        <el-button type="info" round  @click="filter_not_reserved">未预约</el-button> 
        <el-button type="info" round  @click="add">添加</el-button>
    </el-row>
    
    <el-table 
      :data="tableData" 
      style="width: 60%"> 
      <el-table-column
        prop="orderId"  
        label="运单号"
        width="180">
      </el-table-column>
      <el-table-column 
        prop="name"
        label="收件人"
        width="180">
      </el-table-column>
      <el-table-column
        prop="phoneNumber"
        label="电话">
      </el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        width="180">
      </el-table-column>
      <el-table-column
        prop="date"
        label="预约时间"
        width="180">
      </el-table-column>
    </el-table>
  </div></center>
</template>



<script>
// @ is an alias to /src
import Main from '@/components/Main.vue'



export default {
  name: 'main',
  components: {
    Main
  },
  watch:{     
    $route : 'getData'
  },
   data() {
        return {
          tableData: [{
            orderId: '1',
            name: 'loch',
            phoneNumber: '22',
            status:'noPicked',
            date:'2019/02/03'
          }, {
            orderId: '2',
            name: 'lngo',
            phoneNumber: '11',
            status:'noPicked',
            date:'2019/09/24'
          }]
        }
      }
}
</script>
