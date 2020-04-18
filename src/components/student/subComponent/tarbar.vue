<template>
<div>
  <spacing-component></spacing-component>
  <el-tabs v-model="activeName">
      <!-- 基本信息 -->
      <el-tab-pane :label=tarbar.name1 name="first">
        <message-component :person=person></message-component>
      </el-tab-pane>
      <!-- 学生画像 -->
      <el-tab-pane :label=tarbar.name2 name="second">
        <person-component></person-component>
      </el-tab-pane>
      <!-- 谈话记录 -->
      <el-tab-pane :label=tarbar.name3 name="third">
        <talk-component></talk-component>
      </el-tab-pane>
  </el-tabs>
</div>
</template>

<script>
import TalkComponent from './Talk.vue'
import personComponent from './person.vue'
import MessageComponent from './Message.vue'
import SpacingComponent from './spacing.vue'
export default {
  props: [
    'person'
  ],
  data () {
    return {
      tarbar: {
        name1: '基本信息',
        name2: '学生画像',
        name3: '谈话记录'
      },
      activeName: 'first'
    }
  },
  methods: {
    openAndHide: function () {
      this.tarbar3.isShow = !this.tarbar3.isShow
      if (this.tarbar3.isShow === true) {
        this.deg += 90
      } else {
        this.deg -= 90
      }
      console.log(this.tarbar3.isShow)
    }
  },
  components: {
    TalkComponent,
    personComponent,
    MessageComponent,
    SpacingComponent
  }
}
</script>

<style lang='scss'>
#tab-first{
    width: 130%;
    text-align: center;
}
#tab-second {
    width: 130%;
    text-align: center;
}
#tab-third {
    width: 130%;
    text-align: center;
}
</style>
