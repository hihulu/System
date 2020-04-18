<template>
<div>
    <div class="USER" style="background-color: white;">
        <!-- 学生信息 -->
        <div class="user-message">
            <p>{{name}}<span>{{person.name}}</span></p>
            <p>{{number}}<span>{{person.number}}</span></p>
            <p>{{grade}}<span>{{person.grade}}</span></p>
            <p>{{college}}<span>{{person.college}}</span></p>
        </div>
        <!-- 学生照片 -->
        <div class="user-img">
            <img class="img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571668948&di=7cfd68d0c5d636fb4beaef4c039d1058&imgtype=jpg&er=1&src=http%3A%2F%2Fdingyue.nosdn.127.net%2FnjOOKTztjQNj6U6Mtn6VNMx2jIUXpf1q2FSJPx1jagG581557728382485.jpeg" alt="">
        </div>
    </div>
    <tarbar-component :person=person></tarbar-component>
</div>
</template>
<script>
import tarbarComponent from './subComponent/tarbar.vue'
export default {
  data () {
    return {
      id: this.$route.query.id,
      name: '姓名:',
      number: '学号:',
      grade: '年级:',
      college: '学院:',
      person: {
      }
    }
  },
  mounted () {
    console.log(this.id);
    this.$http.get("https://xyt-wx.cumt.edu.cn:80/info/full-info", {withCredentials: true})
      .then( (response) => {
          if ( response.code === 0) {
              // 获取完全学生列表
              this.person = response.data.data
          }
      })
    // this.$http.get("https://xyt-wx.cumt.edu.cn:80/info/majors?department=" + college)
    // .then((response) => {
    //     if ( response.code === 0) {
    //         // 获取专业列表
    //         this.major = response.data.data
    //     }
    // })
  },
  components: {
    tarbarComponent
  }
}
</script>
<style lang='scss'>
.USER {
    height: 15ch;
    .user-message {
        float: left;
        p {
          margin: 10px 0 10px 40px;
          font-family: 微软雅黑;
          font-size: 16px;
          font-weight: bold;
          color: dimgray;
          span {
            margin-left: 10px;
            font-weight: normal;
            font-size: 13px;
            color: black;
          }
        }
    }
    .user-img {
      margin: 15px 40px 20px 0;
      float: right;
      .img {
        height: 100px;
        width: auto;
      }
    }
}
</style>
