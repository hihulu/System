<template>
<div>
  <!-- 谈话内容 -->
  <div class="talk">
    <p>{{tarbar3.title1}}</p>
    <textarea name="textarea"
      rows="10" cols="120">请输入新的谈话记录</textarea>
  </div>
    <!-- 谈话类型 -->
    <div class="talk-type">
        <p @click=openAndHide()>
            <img :class="[tarbar3.isShow?'tarbar3-iconGo':'tarbar3-iconBack']" src="https://www.easyicon.net/api/resizeApi.php?id=1209032&size=128" >
            {{tarbar3.title2}}
        </p>
        <!-- 当点击类型后,展开radio列表 -->
        <radio-component v-show=tarbar3.isShow></radio-component>
    </div>
    <!-- 提交按钮 -->
    <div class="talk-button">
      <el-button type="primary" @click="submit">提交</el-button>
    </div>
</div>
</template>

<script>
import RadioComponent from './radio.vue'
export default {
  data () {
    return {
      tarbar3: {
        title1: '新的谈话记录',
        title2: '选择谈话内容类型',
        isShow: false
      }
    }
  },
  methods: {
    submit () {
      alert('提交成功!')
    },
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
    RadioComponent
  }
}
</script>

<style lang='scss'>
.talk {
  p {
    margin-left: 20px;
    font-family: 微软雅黑;
    font-weight: bold;
    letter-spacing: 2px;
  }
  textarea {
    margin-left: 50px;
  }
}
.tarbar3-iconBack {
    height:5px;
    width:10PX;
    transform: rotate(-90deg);
    animation: iconBack 0.5s;
}
.tarbar3-iconGo {
    height:5px;
    width:10PX;
    transform: rotate(0deg);
    animation: iconGo 0.5s;
}
@keyframes iconGo {
    from {
        transform: rotate(-90deg);
    }
    to {
        transform: rotate(0deg);
        transition: all 0.6s;
    }
}
@keyframes iconBack {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(-90deg);
        transition: all 0.6s;
    }
}
.talk-button {
  text-align: center;
}
.talk-type {
  p {
    margin-left: 40px;
    font-family: 微软雅黑;
    font-size: 14px;
    font-weight: bold;
    color: gray;
  }
}
</style>
