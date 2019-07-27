<template>
<center>
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
    <Table border :columns="columns" :data="showList"></Table>
    </center>
</template>

<script>
    export default {
        name:'Item',
        data() {
        return {
          tableData: [{orderId: '1',name: 'loch',phoneNumber: '22',status:'已预约',date:'2019/02/03'
          }, {orderId: '2',name: 'lngo',phoneNumber: '11',status:'已取件',date:'2019/09/24'}]
        }
      },
      computed:{
          showList:function(){
              if(this.$store.state.showing=='All')
            return this.$store.state.packageList
            if(this.$store.state.showing=='Appointed')
            return this.$store.state.packageList.filter(item=>item.status=='已预约')
            if(this.$store.state.showing=='Fetched')
            return this.$store.state.packageList.filter(item=>item.status=='已取件')
            if(this.$store.state.showing=='Unappoint')
            return this.$store.state.packageList.filter(item=>item.status=='未预约')
          }
      }
    }
</script>