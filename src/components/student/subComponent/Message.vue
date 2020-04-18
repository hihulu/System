<template>
<div>
  <!-- 基本信息栏 -->
  <div class="BASE">
      <div class="first">
          <span style="float: left;">{{title.title1}}：<span>{{person.stu_pinyin}}</span></span>
          <span  id="right">{{title.title2}}：<span>{{person.stu_gender}}</span></span>
      </div>
      <div class="second">
          <span style="float: left;">{{title.title3}}：<span>{{person.stu_class}}</span></span>
          <span id="right">{{title.title4}}：<span>{{person.stu_academic_record}}</span></span>
      </div>
      <div><span>{{title.title5}}：<span>{{person.stu_nationality}}</span></span></div>
      <div><span>{{title.title6}}：<span>{{person.phone}}</span></span></div>
      <div><span>{{title.title7}}：<span>{{person.stu_id}}</span></span></div>
      <div><span>{{title.title8}}：<span>{{person.dormitory}}</span></span>
      <!-- 查看寝室成员,可另写组件 -->
      <el-popover
          placement="right"
          width="400"
          trigger="click">
          <el-table :data="dormitoyData">
              <el-table-column width="150" property="name" label="姓名"></el-table-column>
              <el-table-column width="100" property="number" label="学号"></el-table-column>
              <el-table-column width="300" property="class" label="班级"></el-table-column>
          </el-table>
          <span slot="reference" id="dormitoy">[点击查看寝室成员]</span>
      </el-popover>
      </div>
      <div><span>{{title.title9}}：<span>{{person.Email}}</span></span></div>
      <div><span>{{title.title10}}：<span>{{person.address}}</span></span></div>
  </div>
  <spacing-component :person="height"></spacing-component>
  <!-- 关系栏 -->
  <div class="RELATION">
      <div><span>{{title.title11}}:<span>{{person.emergency_callee}}</span></span></div>
      <div><span>{{title.title12}}:<span>{{person.emergency_phone}}</span></span></div>
      <div><span>{{title.title13}}:<span>{{person.counsellor_name}}</span></span></div>
      <div><span>{{title.title14}}:<span>{{person.counsellor_phone}}</span></span></div>
  </div>
  <spacing-component></spacing-component>
  <!-- 查看成绩栏 -->
  <grade-component></grade-component>
  <spacing-component></spacing-component>
  <!-- 学校栏 -->
  <div class='SCHOOL'>
      <div><span>{{title.title15}}:<span>{{person.graduated_school}}</span></span></div>
      <div><span>{{title.title16}}:<span>{{person.mental_level}}</span></span></div>
      <div><span>{{title.title17}}:<span>{{person.financial_aid}}</span></span></div>
      <div style="height:60px;"><span>{{title.title18}}:<span style="line-height: 200%;">{{person.awards}}</span></span></div>
      <div><span>{{title.title19}}:<span>{{person.comments}}</span></span></div>
  </div>
  <spacing-component></spacing-component>
</div>
</template>

<script>
import SpacingComponent from './spacing.vue'
import gradeComponent from './grade.vue'
export default {
  props: [
    'person'
  ],
  data () {
    return {
      title: {
        title1: '姓名拼音',
        title2: '性别',
        title3: '班级',
        title4: '学历',
        title5: '民族',
        title6: '电话',
        title7: '身份证号',
        title8: '寝室',
        title9: '邮箱',
        title10: '居住地',
        title11: '紧急联系人',
        title12: '紧急电话',
        title13: '辅导员',
        title14: '辅导员电话',
        title15: '毕业院校',
        title16: '心理等级',
        title17: '经济资助',
        title18: '获奖情况',
        title19: '备注'
      },
      message: {
        // stu_pinyin: 'zhangsan',
        // stu_gender: '女',
        // stu_class: '电子商务2017-02班',
        // stu_academic_record: '本科',
        // stu_nationality: '汉',
        // phone: '18922223333',
        // stu_id: '110220199811110000',
        // dormitory: '竹2A0000',
        // Email: '123456789@qq.com',
        // address: 'A省B市C区D路E号F小区G幢H单元I室',
        // emergency_callee: '陆银喜',
        // emergency_phone: '13812701202',
        // counsellor_name: '13605215009/83591235',
        // counsellor_phone: '无',
        // graduated_school: '江苏省姜堰第二中学',
        // mental_level: '005944',
        // financial_aid: '徐彤彤',
        // awards: '2017-2018校级三等奖学金、SAP青年责任梦想大赛二等奖、小纸人创新摄影大赛三等奖、2018年善行100优秀服务者、徐州市大学生“她”摄影大赛三等奖、红叶行动摄影大赛三等奖',
        // comments: '无'
      },
      dormitoyData: [
        {
          name: '李四',
          number: '09177777',
          class: '电商17-02班'
        },
        {
          name: '李四',
          number: '09177777',
          class: '电商17-02班'
        },
        {
          name: '李四',
          number: '09177777',
          class: '电商17-02班'
        }
      ],
      height: 20
    }
  },
  components: {
    SpacingComponent,
    gradeComponent
  }
}
</script>

<style lang='scss'>
.BASE {
  div {
    font-family: 微软雅黑;
    height: 35px;
    span{
      margin-left: 20px;
      font-size: 16px;
      font-weight: bold;
      color: dimgray;
      span {
        margin-left: 10px;
        font-size: 13px;
        font-weight: normal;
        color: black;
      }
    }
  }
}
.RELATION {
  div {
    font-family: 微软雅黑;
    font-size: 14px;
    height: 35px;
    span{
      margin-left: 20px;
      font-size: 16px;
      font-weight: bold;
      color: dimgray;
      span {
        margin-left: 10px;
        font-size: 13px;
        font-weight: normal;
        color: black;
      }
    }
  }
}
.SCHOOL {
  div {
    font-family: 微软雅黑;
    font-size: 14px;
    height: 35px;
    span{
      margin-left: 20px;
      font-size: 16px;
      font-weight: bold;
      color: dimgray;
      span {
        margin-left: 10px;
        font-size: 13px;
        font-weight: normal;
        color: black;
      }
    }
  }
}
#right {
  float: right;
  margin-right:20px;
  width:200px;
  text-align:left;
}
#dormitoy {
  font-size: 10px;
  color: #409EFF;
  font-weight: bold;
}
</style>
