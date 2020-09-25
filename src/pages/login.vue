<template>
  <div id="login" class="login">
    <el-input placeholder="请输入用户名" v-model="username" clearable></el-input>
    <el-input placeholder="请输入密码" v-model="password" clearable></el-input>
    <div class="btn">
      <el-button type="primary" @click="sendLogin">登录</el-button>
    </div>
  </div>
</template>
    
<script>
export default {
  name: 'login',
  data(){
    return{
      username:'',
      password:''
    }
  },
  mounted(){
  },
  methods:{
    sendLogin(){
        let users ={
          token:"t2t123xafwfw2233",
          userName:this.username
        }
        if(!this.username){
          return;
        }
        localStorage.setItem("users",JSON.stringify(users));
        const isLogin = JSON.parse(localStorage.getItem("users")) && JSON.parse(localStorage.getItem("users")).['userName'];
        if(isLogin && this.$route.query && this.$route.query.redirect){
          this.$router.push({path:this.$route.query.redirect})
        }
    }
  },
  beforeRouteEnter(to, from, next) {
    const isLogin = JSON.parse(localStorage.getItem("users")) && JSON.parse(localStorage.getItem("users")).['userName'];
    if(isLogin){
       next({
        path:"/"
      }); 
    }else{
      next();
    }
    
  }
}
</script>

<style lang="less" scoped>
.login{
  width: 400px;
  margin:0 auto;
  .el-input{
    margin-top: 15px;
  }
  .btn{
    text-align: right;
  }
  .el-button{
    margin-top: 15px;

  }
}
</style>
