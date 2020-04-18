<template>
  <transition name="el-fade-in-linear">
  <div style="margin-top: 20px">
    <el-radio-group v-model="model" size="small" style="margin: 0 0 30px 60px;">
      <el-radio-button v-for="item in showTable" :key="item.id" :label=item.name
        style="margin-right: 3px;"></el-radio-button>
    </el-radio-group>
  </div>
  </transition>
</template>

<script>
export default {
  data () {
    return {
      model: 1,
      showTable: [
        {
          id: 1,
          name: '自我探索'
        },
        {
          id: 2,
          name: '人际关系'
        },
        {
          id: 3,
          name: '情绪困扰'
        },
        {
          id: 4,
          name: '生涯探索'
        },
        {
          id: 5,
          name: '家庭问题'
        },
        {
          id: 6,
          name: '身体疾病'
        },
        {
          id: 7,
          name: '生活适应'
        },
        {
          id: 8,
          name: '情感问题'
        },
        {
          id: 9,
          name: '生理问题'
        },
        {
          id: 10,
          name: '学业问题'
        },
        {
          id: 11,
          name: '寻求信息'
        },
        {
          id: 12,
          name: '其他'
        }
      ]
    }
  }
}
</script>

<style>

</style>
