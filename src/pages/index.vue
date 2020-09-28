<template>
  <div id="index">
      <div class="main">
      <h2 v-if="$store.state.users.userName">{{ $store.state.users.userName}} <span>你好</span></h2>
      <h2 v-else>未登录</h2>
      <div class="textBox">
        <textarea class="text" v-model="textareaContent" placeholder="示例: main/js/box/index.js,main/js/abox,"></textarea>
      </div>
      <div class="btn">
        <span @click="clear">清空</span>
        <button @click="sendData">上线</button>
      </div>
      <div class="example">
        <p>上线状态：<span id="result"></span></p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'index',
  data(){
    return{
      textareaContent:''
    }
  },
  mounted(){
    if(localStorage.getItem("upList")){
      this.textareaContent = localStorage.getItem("upList");
    }
  },
  methods:{
    clear(){
      this.textareaContent = '';
      localStorage.removeItem("upList");

    },
    sendData(){
      if(this.textareaContent == ''){
        this.$message({
            showClose: true,
            message: '请输入上线列表',
            type: 'error'
          });
        return;
      }
      let formData = new FormData();
          formData.append("val",this.textareaContent);
      this.$axios({
        url:     "/api/updata",
        method:  "post",
        data:    formData,
        headers: {'Content-Type':'application/x-www-form-urlencoded'}
      }).then((res) => {
        
      }).then().catch((error) => {
        console.warn(error)
      })
      localStorage.setItem("upList", this.textareaContent);

    }
  }
  
}
</script>

<style lang="less" scoped>
  h2{
    span{
      font-weight: normal;
      font-size: 16px;
      }
  }
  .main{
    width: 750px;
    margin: 10px auto;
  }
  .example{
    margin-top: 50px;
    padding:10px; 
    border-radius: 3px;
    background: #dcdcdb;
  }
  .main p{
    font-size: 12px;
    line-height: 25px;
  }
  p.title{
    font-size: 12px;
  }
  .textBox{
    width: 100%;
    margin-top: 20px;
    min-height: 300px;
    border-radius:5px;
    text-align: right;
  }
  .text{
    width: 736px;
    padding: 5px;
    min-height:300px; 
    border:1px solid #595450;
    line-height: 20px;
  }
  .btn{
    text-align: right;
  }
  .btn button{
    margin-top: 10px;
    width: 100px;
    height: 30px;
    text-align: center;
    line-height: 28px;
    cursor: pointer;
  }
  .btn span{
    font-size: 12px;
    margin-right:20px;
    color: blue;
    cursor: pointer;
  }
  .red{color:red;}
  .blue{color:blue;}
</style>
