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
    </center>
</template>

<script>
    export default {
        data() {
        return {
          tableData: [{orderId: '1',name: 'loch',phoneNumber: '22',status:'noPicked',date:'2019/02/03'
          }, {orderId: '2',name: 'lngo',phoneNumber: '11',status:'noPicked',date:'2019/09/24'}]
        }
      }
    }
</script>