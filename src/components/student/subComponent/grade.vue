<template>
<div @click="table = true">
  <el-row :gutter="20">
    <el-col :span="4"><div class="grid-content bg-purple">
        <el-button type="text" id="b-word">查看该学生成绩</el-button>
    </div></el-col>
    <el-col :span="17"><div class="grid-content bg-purple"></div></el-col>
    <el-col :span="3"><div class="grid-content bg-purple" style="margin-top:5px;">
      <el-button icon="el-icon-right" size="mini" circle id="b-icon"></el-button>
    </div></el-col>
  </el-row>

    <el-drawer
      title="学生成绩如下"
      :visible.sync="table"
      direction="rtl"
      size="70%">
    <el-table :data="gridData">
      <el-table-column property="college" label="开课学院" width="150"></el-table-column>
      <el-table-column property="name" label="科目" width="200"></el-table-column>
      <el-table-column property="grade" label="成绩"></el-table-column>
    </el-table>
  </el-drawer>
</div>
</template>

<script>
export default {
  data () {
    return {
      table: false,
      dialog: false,
      loading: false,
      gridData: [{
        college: '管理学院',
        name: '管理运筹学',
        grade: '100'
      }, {
        college: '管理学院',
        name: '管理运筹学',
        grade: '100'
      }, {
        college: '管理学院',
        name: '管理运筹学',
        grade: '100'
      }, {
        college: '管理学院',
        name: '管理运筹学',
        grade: '100'
      }, {
        college: '管理学院',
        name: '管理运筹学',
        grade: '100'
      }, {
        college: '管理学院',
        name: '管理运筹学',
        grade: '100'
      }]
    }
  }
}
</script>
<style lang='scss'>
#b-word {
  margin-left: 20px;
  display: table-cell;
  // float: left;
  width: 50%;
}
#b-icon {
  margin-right: 20px;
  padding-top: 10px;
  // border: none;
  display: table-cell;
  // float: right;
}
 .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
</style>
