<template>
  <div id="fireradarXadmin">

    <!-- begin app-header -->
    <div class="app-header fireradarX-t-a-l">
      FireRadar
    </div>
    <!-- end app-header -->

    <!-- begin app-container -->
    <div class="app-container clearfix">
      
      <div class="app-left-sidebar">
        <ul>
          <li v-for="item in navList">
            <router-link v-bind:to="item.id">{{item.name}}</router-link>
          </li>
        </ul>
      </div> 
      
      <div class="app-right-content">
        <router-view></router-view>
      </div> 
      
    </div>
    <!-- end app-container -->

  </div>
</template>

<script>
  export default {
    name: 'app',
    data(){
      return {
         navList:[
        {
          name:"快速查看",
          id:"quickPreview"
        },
        {
          name:"开始",
          id:"start"
        },
        {
          name:"搜索",
          id:"search"
        },
        {
          name:"总控台",
          id:"masterConsole"
        },
        {
          name:"规则仓库",
          id:"ruleManagement"
        },
        {
          name:"欺诈规则",
          id:"fraudRules"
        },
        {
          name:"黑名单管理",
          id:"blackListManagement"
        },
        {
          name:"系统管理",
          id:"systemManagement"
        },
        {
          name:"帮助",
          id:"help"
        }
      ]
      }
    }
  }
</script>
<style>
*{
  padding:0;
  margin:0;
}
html,body{
  overflow: hidden;
}
html,body,#fireradarXadmin{
  width: 100%;
  height: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul,li {
  list-style-type: none;
  padding: 0;
  text-align: center;
}
a {
  color: #42b983;
  text-decoration: none;
}
button,input{
  outline: none !important;
}
*::-webkit-scrollbar {
    width: 6px;
    height: 4px;
}

*::-webkit-scrollbar-button {
    background-color: transparent;
    height: 0;
    width: 0;
}

*::-webkit-scrollbar-track {    
    background: transparent;
}

*::-webkit-scrollbar-track-piece {
    background: transparent;
}

*::-webkit-scrollbar-thumb {
    background: #bcbcbc;
    border-radius: 4px;
}

*::-webkit-scrollbar-thumb:hover {
    background: #aaa;
    cursor: pointer;
}
*::-webkit-scrollbar-thumb:active {
    background: #8d8d8d;
    cursor: pointer;
}
*::-webkit-scrollbar-corner {
    background: transparent;
    height: 0;
    width: 0;
}

*::-webkit-scrollbar-resizer {
    background: transparent;
}
.clearfix:before{
  content: '';
  display: block;
  clear: both;
}
.clearfix{
  zoom:1;
}
#fireradarXadmin {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.fireradarX-m-l-10{
  margin-left: 10px !important;
}
.fireradarX-m-l-50{
  margin-left: 50px !important;
}
.fireradarX-m-r-10{
  margin-right: 10px !important;
}
.fireradarX-m-r-20{
  margin-right: 20px !important;
}
.fireradarX-m-r-50{
  margin-right: 50px !important;
}
.fireradarX-m-t-10{
  margin-top: 10px !important;
}
.fireradarX-m-t-30{
  margin-top: 30px !important;
}
.fireradarX-m-t-50{
  margin-top: 50px !important;
}
.fireradarX-t-a-l{
  text-align: left !important;
}
.fireradarX-t-a-c{
  text-align: center !important;
}
.fireradarX-p-l-40{
  padding-left: 40px !important;
}


/*begin 头部*/
.app-header{
  text-align: left;
  width: 100%;
  line-height: 70px;
  background: #04acbb;
  color: #fff;
  text-indent: 40px;
  font-size: 2em;
  min-height: 70px;
  text-shadow: 0 0 2px #eee;
  -webkit-text-shadow:0 0 2px #eee;
}
/*end 头部*/

/*begin  主容器*/
.app-container{
  height: 90%;
  width: 100%;
  background: #eee;
}
.app-container > div{
  float: left;
}
/*end 主容器*/


/*begin 左侧边栏*/
.app-left-sidebar{
  color:#fff;
  height: 100%;
  width: 18%;
  background: #2a3542;
  padding-top: 30px;
}
.app-left-sidebar li a{
  cursor:pointer;
  color:#989898;
  line-height: 50px;
  transition: all .5s;
  line-height: 50px;
}
.app-left-sidebar li:hover{
  background: #999;
  height: 60px;
  line-height: 60px;
}
.app-left-sidebar li:hover a{
  text-decoration: none;
  color: #fff;
}
/*begin 左侧边栏*/

.app-right-content{
  margin: 2%;
  width: 78%;
  height: 100%;
}
</style>
