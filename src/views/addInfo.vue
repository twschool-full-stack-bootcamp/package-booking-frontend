<template>
<div>
    <center><h2 style="margin-top:-123px">添加条目</h2></center>
    运 单 号：<el-input v-model="inputOrder" style="width:45%" placeholder="请输入运单号" ></el-input>
    <br><br>
    收 件 人：<el-input v-model="receiveName" style="width:45%" placeholder="请输入收件人姓名" ></el-input>
    <br><br>
    电    话：<el-input v-model="phoneNumber" style="width:45% " placeholder="请输入电话" ></el-input>
    <br><br>
    状    态：<el-input v-model="status" style="width:45% " placeholder="请输入状态信息" ></el-input>
    <br><br>
    预约时间：<el-input v-model="time" style="width:45% " placeholder="请输入预约时间" ></el-input>
    <br><br>
    <el-button type="submit">添加</el-button>
    <el-button>取消</el-button>
</div>
</template>

<script>
export default {
  data() {
    return {
      inputOrder: '',
      receiveName:'',
      phoneNumber:'',
      status:'',
      time:''
    }
  }
}
</script>