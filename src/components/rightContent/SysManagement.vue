<template>
  <div class="SysManagement">
    <div class="container">
      <h4>
          <span class="glyphicon glyphicon-user"></span>
          用户ID及姓名
      </h4>
      <div class="input-box">
        <input type="text" class="label_better" placeholder="用户ID"  data-new-placeholder="用户ID">  
      </div>
      <div class="input-box">
        <input type="text" class="label_better" placeholder="姓" data-new-placeholder="姓">
      </div>

      <div class="input-box">
        <input type="text" class="label_better" placeholder="名" data-new-placeholder="名">
      </div>
      

      <!-- begin 用户密码 -->
      <h4>
          <span class="glyphicon glyphicon-lock"></span>
          用户密码
      </h4>
      <div class="input-box">
        <input type="password" class="label_better" placeholder="密码" data-new-placeholder="密码">
      </div>
      <div class="input-box">
        <input type="password" class="label_better" placeholder="新密码" data-new-placeholder="新密码">
      </div>
      <!-- end 用户密码 -->

      <!-- begin 角色选择 -->
      <div class="input-box">
        <h4>用户角色选择</h4>
        <div class="radio fireradarX-m-t-30">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
           <span class="glyphicon glyphicon-hand-right fireradarX-m-r-20 fireradarX-m-l-10"></span>管理员
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
           <span class="glyphicon glyphicon-hand-right fireradarX-m-r-20 fireradarX-m-l-10"></span>客户
          </label>
        </div>
        <div class="radio">
          <label>
            <input type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked>
           <span class="glyphicon glyphicon-hand-right fireradarX-m-r-20 fireradarX-m-l-10"></span>其他
          </label>
        </div>
      </div>
    </div>
    <!-- end角色选择 -->
    <div class="bottom">
      <button class="btn btn-default  fireradarX-m-r-50">取消</button>
      <button class="btn btn-warning  fireradarX-m-r-20">保存</button>
    </div>
  </div>
</template>
  
<script>
// import $ from 'jquery'

window.jQuery = require( 'jquery');

console.log('fewfw')
var label_better=require('./jquery.label_better.js')
console.log(label_better)

export default {
  name: 'systemManagement',
  data () {
    return {

    }                 
   
  },
  mounted:function(){
    $(".label_better").label_better({
          easing: "bounce",
          offset: 5
    });

  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
::-webkit-input-placeholder {
  color:#999;
}
:-moz-placeholder {
  color:#999;
}
::-moz-placeholder {
  color: #999;
}
:-ms-input-placeholder {
  color: #999;
}
.SysManagement,.SysManagement .container{
  background: #fff;
  width: 100%;
  border-radius: 8px;
  -webkit-border-radius: 8px;
}
.SysManagement{
  height: 95%;
  box-shadow: 0 0 3px #999;
}
.SysManagement h4 {
   color: #04acbb;
}
.SysManagement .container{
  padding-top: 50px;
  height: 85%;
  overflow: auto;
}
.SysManagement .bottom{
  text-align: right;
  height: 15%;
  background: #ddd;
}
.SysManagement .bottom:after{
  display: inline-block;
  height: 100%;
  vertical-align: middle;
  content: '';
}
.SysManagement .bottom button{
  display: inline-block;
  width: 12%;
  height: 40%;
}


.input-box{
  width: 65%;
  margin: 20px auto 30px;
}
.SysManagement .container >h4{
  width: 65%;
  margin: 0 auto 30px;
}
.SysManagement input[type="text"],.SysManagement input[type="password"]{
  display: inline-block;
  text-indent: 20px;
  color: #333 !important;
  width: 100%;
  height: 40px;
  border:1px solid #ccc !important;
  border-radius: 5px !important;
  -webkit-border-radius: 5px !important;
}
.SysManagement .radio{
  height: 40px;
  transition: all .8s;
}
.SysManagement .radio:hover label{
  color:#04acbb;
  font-weight: bold;
  font-size: 16px;
}
.SysManagement input:focus{
  border: 0 !important;
  outline: none;
  box-shadow: 0 0 2px #04acbb;
  -webkit-box-shadow: 0 0 4px #04acbb;
}

</style>
