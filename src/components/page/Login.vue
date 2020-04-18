<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">后台管理系统</div>
            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="uname">
                    <el-input v-model="param.uname" placeholder="uname">
                        <el-button slot="prepend" icon="el-icon-lx-people"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="pwd">
                    <el-input
                        type="password"
                        placeholder="password"
                        v-model="param.pwd"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lx-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <!-- <el-button type="primary" @click="submitForm()">登录</el-button> -->

                    <el-button type="primary" @click="submitForm();centerDialogVisible = true">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
import Axios from 'axios';
import qs from 'qs';

export default {
    data: function() {
        return {
            code: 1,
            msg: '',
            centerDialogVisible: false,
            param: {
                uname: '',
                pwd: '',
            },
            rules: {
                uname: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                pwd: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
            admin: [
                {
                    id: -1,
                    name: '兼职辅导员'
                },
                {
                    id: 0,
                    name: '学生'
                },
                {
                    id: 1,
                    name: '辅导员'
                },
                {
                    id: 2,
                    name: '学院书记'
                },
                {
                    id: 3,
                    name: '学工处'
                },
                {
                    id: 4,
                    name: '管理员'
                }
            ]
        };
    },
    computed: {
        getCode () {
            let code = this.$store.state.login.code
            return code
        }
    },
    methods: {
        submitForm() {    
                    
            this.$refs.login.validate(valid => {
                if (valid) {
                    let data = this.param
                    this.$http.post('https://xyt-wx.cumt.edu.cn:80/login', qs.stringify(data), {
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                        })
                    

                        .then((response) => {
                            if (response.data.code === 0) {
                                // this.$store.commit('GET_CODE', response.code)
                                // this.$store.commit('GET_MSG', response.msg)
                                this.$message({
                                    message: '登陆成功',
                                    type: 'success'
                                })
                                sessionStorage.setItem('ms_username', '57041')
                                this.$router.push({
                                    name: 'up',
                                    params: {
                                        systemId: 123,
                                        systemName: 'name'
                                    }
                                });
                            } else {}
                        })
                    } else {
                        alert("ERROR SUBMIT")
                        return false
                    }
                })
        },
        adminSystem(id, name) {

        }
    },
};
</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>