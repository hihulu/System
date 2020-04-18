<template>
<div>
    <el-collapse accordion>
        <el-collapse-item v-for="item in tarbar2.addList" :key="item.id"  :title="item.name" :name="item.id">
            <div>内容</div>
        </el-collapse-item>
    </el-collapse>
<!-- 提交按钮 -->
    <div class="add" >
        <el-button type="primary" class="btn btn-primary" @click=add() v-show="!tarbar2.isAdd" style="margin-top:20px">
            添加新的画像内容
        </el-button>
        <!-- 增加的新的画像 -->
        <transition name="el-fade-in-linear">
            <div>
              <el-tabs :tab-position="tabPosition" style="height: 200px;" v-show='tarbar2.isAdd'>
                <el-tab-pane :label="item.name" class="add-item" v-for="item in tarbar2.addList" :key="item.id">
                  <p class="item-title">{{item.name}}:</p>
                  <div style="margin-left:70px;">
                    <div>
                      <textarea rows="10" cols="100" :placeholder="['请输入新的'+item.name+':']" id='a-textarea'></textarea>
                    </div>
                    <div style="text-align: center;width:100%">
                      <el-button type="primary" plain id="a-button"
                        @click="submit()">提交</el-button>
                    </div>
                  </div>
                </el-tab-pane>
                <spacing-component></spacing-component>
              </el-tabs>
              <el-button type="primary" class="btn btn-primary" @click="add();submit();" v-show="tarbar2.isAdd" style="margin-top:20px;">
                  添加
              </el-button>
            </div>
        </transition>
    </div>
</div>
</template>

<script>
import SpacingComponent from './spacing.vue'
export default {
  data () {
    return {
      tabPosition: 'left',
      tarbar2: {
        addList: [
          {
            id: 1,
            name: '体貌特征'
          },
          {
            id: 2,
            name: '性格特点'
          },
          {
            id: 3,
            name: '兴趣爱好'
          },
          {
            id: 4,
            name: '家庭经济状况'
          },
          {
            id: 5,
            name: '学习成绩和奖励'
          }
        ],
        isAdd: false
      }
    }
  },
  methods: {
    add: function () {
      this.tarbar2.isAdd = !this.tarbar2.isAdd
    },
    submit: function () {
      alert('提交成功！')
    }
  },
  components: {
    SpacingComponent
  }
}
</script>

<style lang='scss'>
.add {
    text-align: center;
    width: 100%;
}
.item-title {
  font-family: 微软雅黑;
  font-weight: bold;
  font-size: 14px;
  letter-spacing: 2px;
  margin-left: 20px;
}
.add-item {
    width: 100%;
    text-align-last: left;
}
#a-textarea {
  height: 10ch;
}
#a-button {
  margin-top: 10px;
  margin-left: 40%;
  text-align: center;
  height: 5ch;
  // width: 50%;
}
</style>
