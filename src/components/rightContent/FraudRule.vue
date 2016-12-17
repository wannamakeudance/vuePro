<template>
  <div class="create-fraud-rule">
    <!-- begin  头部按钮 -->
     <div class="header detailInfo">
       <div class="title">
         编辑欺诈规则
       </div>
       <div class="detail clearfix">
          <button class="btn btn-warning fireradarX-m-r-20 pull-left">
          创建
          </button>
          <button class="btn btn-default pull-left">
          取消
          </button>
         
          <div class="checkbox pull-right fireradarX-m-r-20">
            <label>
              <input type="checkbox"> 隐藏规则
            </label>
          </div>
          <div class="checkbox pull-right fireradarX-m-t-10 fireradarX-m-r-20">
            <label>
              <input type="checkbox"> 登陆追踪信息
            </label>
          </div>
       </div>
     </div>
     <!-- end 头部按钮 -->

     <!-- begin  欺诈规则详细信息 -->
     <div class="detailInfo fireradarX-m-t-30">
       <div class="title">欺诈规则详细信息</div>
       <ul class="content">
         <li class="clearfix">
           <div class="left pull-left">
              激活
           </div>
           <div class="right pull-left">
              <label>
                <input type="checkbox" 　style=""> 非当前激活的欺诈规则
              </label>
           </div>
         </li>

         <li class="clearfix">
           <div class="left pull-left">
              名字
           </div>
           <div class="right pull-left">
             <input type="text" name="" placeholder="可疑名单用户修改账户信息并大额转账" maxlength="40" class="fraudName fireradarX-m-r-10"><span>最多40字符</span>
           </div>
         </li>

         <li class="clearfix">
           <div class="left pull-left">
              描述
           </div>
           <div class="right pull-left">
             <input type="text" name="" placeholder="可疑名单中的用户修改账户信息并大额转账描述" class="fraudDes">
           </div>
         </li>


         <li class="clearfix">
           <div class="left pull-left">
              欺诈组
           </div>
           <div class="right pull-left">
             
           </div>
         </li>
       </ul>
     </div>
     <!-- end 欺诈规则详细信息 -->

     <!-- begin 欺诈规则定义-->
     <div class="detailInfo fireradarX-m-t-30">
       <div class="title">欺诈规则定义</div>
       <ul class="content">
         <li class="clearfix">
           <div class="left pull-left">
              类型
           </div>
           <div class="right pull-left">
              <select class="form-control chooseUser">
                <option>指定用户的特殊操作1</option>
                <option>指定用户的特殊操作2</option>
                <option>指定用户的特殊操作3</option>
                <option>指定用户的特殊操作4</option>
                <option>指定用户的特殊操作5</option>
              </select>
           </div>
         </li>

         <li class="clearfix">
           <div class="left pull-left">
              规则评估
           </div>
           <div class="right pull-left">
            <label>
              <input type="checkbox"> 实时触发
            </label>
            <label>
              <input type="checkbox"> 立刻组合
            </label>
           </div>
         </li>

         <li class="clearfix activity">
           <div class="left pull-left">
              活动的
           </div>
           <div class="right pull-left clearfix">
            　<button class="btn btn-warning pull-left fireradarX-m-l-10 fireradarX-m-t-10"  @click="addAct">增加操作</button>
              <div class="table-content">
                 <table style="table-layout: fixed;" class="table table-hover">
                <thead>
                  <tr>
                    <td style="width:6%">活动的</td>
                    <td style="width:40%;">状态</td>
                    <td style="width:12%">发生</td>
                    <td style="width:12%;">规则限制</td>
                    <td style="width:10%">规则分</td>
                    <td style="width:10%">删除</td>
                  </tr>
                </thead>
                <tbody>
                  <!-- begin row -->
                   <tr v-for="(item,index) in activityList">
                    <td>
                      <select v-model="item.actionList.selected.name">
                        <option v-for="item1 in item.actionList.list">{{item1.name}}</option>
                      </select>
                    </td>
                    <td>
                      <select v-model="item.status.select1.selected.name">
                        <option v-for="item2 in item.status.select1.list">{{item2.name}}</option>
                      </select>

                      <select v-model="item.status.select2.selected.name">
                        <option v-for="item3 in item.status.select2.list">{{item3.name}}</option>
                       
                      </select>

                      <select v-model="item.status.select3.selected.name">
                        <option v-for="item4 in item.status.select3.list">{{item4.name}}</option>

                      </select>
                    </td>
                    <td>
                      至少<input type="text" v-model="item.happened">
                    </td>
                    <td>
                      <input type="text" name="" v-model="item.ruleLimited">
                    </td>
                    <td>
                      <input type="text" name="" v-model="item.ruleScore">
                    </td>
                    <td>
                      <button class="btn btn-success" @click="rmAct(index)">删除</button>
                    </td>
                  </tr>
                  <!-- end row -->
                 
                </tbody>
              </table>
              </div>
             
           </div>
         </li>


        <li class="clearfix" style="height:120px">
           <div class="left pull-left" 　style="line-height:120px;">
              规范范围
           </div>
           <div class="right pull-left">
              <div>
                  <label>
                    <input type="checkbox"> 指定用户的一个会话
                  </label>
              </div>
              <div>
                  <label>
                    <input type="checkbox"> 指定用户以下时间范围内的会话
                     <select class="form-control timeRange">
                        <option>1h</option>
                        <option>2h</option>
                        <option>3h</option>
                        <option>4h</option>
                        <option>5h</option>
                        <option>6h</option>
                        <option>7h</option>
                        <option>8h</option>
                        <option>9h</option>
                        <option>10h</option>
                        <option>11h</option>
                        <option>12h</option>
                        <option>13h</option>
                        <option>14h</option>
                        <option>15h</option>
                        <option>16h</option>
                        <option>17h</option>
                        <option>18h</option>
                        <option>19h</option>
                        <option>20h</option>
                        <option>21h</option>
                        <option>22h</option>
                        <option>23h</option>
                        <option>24h</option>
                     </select>
                  </label>
              </div>
           </div>
        </li>
  
        <li class="clearfix getScore" style="height:200px;">
           <div class="left pull-left" style="line-height:200px;">
              得分
           </div>
           <div class="right pull-left">
             <table class="table table-hover">
               <thead>
                 <tr>
                   <td>问题严重性</td>
                   <td>规则总分达到</td>
                   <td>风险分适用每个用户</td>
                 </tr>
               </thead>

               <tbody>
                 <tr>
                   <td>
                     <label>
                       <input type="checkbox" name="">
                       警告
                     </label>
                   </td>
                   <td>
                     >= <input type="text" name="" value="10" class="getScore">
                   </td>
                   <td>
                     <input type="text" name="" value="50" class="getScore">
                   </td>
                 </tr>

                  <tr>
                   <td>
                     <label>
                       <input type="checkbox" name="">
                       严重
                     </label>
                   </td>
                   <td>
                     >= <input type="text" name="" value="30">
                   </td>
                   <td>
                     <input type="text" name="" value="150">
                   </td>
                 </tr>

                  <tr>
                   <td>
                     <label>
                       <input type="checkbox" name="">
                       危急
                     </label>
                   </td>
                   <td>
                     >= <input type="text" name="" value="60" class="getScore">
                   </td>
                   <td>
                     <input type="text" name="" value="250" class="getScore">
                   </td>
                 </tr>
               </tbody>
             </table>
           </div>
           
        </li>


       </ul>
     </div>
     <!-- end 欺诈规则定义 -->

     <!-- begin 警报消息 -->
     <div class="detailInfo warnNotice fireradarX-m-t-30">
       <div class="title">警告消息</div>
       <ul class="content">
          <li class="clearfix">
           <div class="left pull-left">
              短消息
           </div>
           <div class="right pull-left">
             <textarea class="form-control" rows="3">
可疑名单用户修改账户信息并大额转账
             </textarea>
           </div>
         </li>

         <li class="clearfix">
           <div class="left pull-left">
              长消息
           </div>
           <div class="right pull-left">
             <textarea class="form-control" rows="3">
可疑IP名单中用户登录，进行账户信息修改，然后转帐。
             </textarea>
           </div>
         </li>
       </ul>
     </div>
     <!-- end 警报消息 -->
  </div>
</template>
  
<script>
import $ from 'jquery/dist/jquery.min.js'
export default {
  name: 'fraudRule',
  data () {
    return {
      activityList:[
        {
           actionList:{
            selected:{
               name:'登录',
               id:'action01'
            },
            list:[
              {
                name:'登录',
                id:'action01'
              },
              {
                name:'更新',
                id:'action02'
              },
              {
                name:'转帐',
                id:'action03'
              }
            ]
          },
          status:{
            select1:{
              selected:{
                name:'客户IP地址',
                id:'select101'
              },
              list:[
                {
                  name:'客户IP地址',
                  id:'select101'
                },
                {
                  name:'触发',
                  id:'select102'
                },
                {
                  name:'金额',
                  id:'select103'
                }
              ]
            },
            select2:{
              selected:{
                name:'在列表中',
                id:'select201'
              },
              list:[
                {
                  name:'在列表中',
                  id:'select201'
                },
                {
                  name:'大于1',
                  id:'select202'
                },
                {
                  name:'小于1',
                  id:'select203'
                }
              ]
            },
            select3:{
              selected:{
                name:'黑名单',
                id:'select301'  
              },
              list:[
               {
                  name:'黑名单',
                  id:'select301'
                },
                {
                  name:'50000',
                  id:'select302'
                },
                {
                  name:'10000',
                  id:'select303'
                }
              ]
            }
          },
          happened:1,
          ruleLimited:10,
          ruleScore:10
        },
                {
           actionList:{
            selected:{
               name:'登录',
               id:'action01'
            },
            list:[
              {
                name:'登录',
                id:'action01'
              },
              {
                name:'更新',
                id:'action02'
              },
              {
                name:'转帐',
                id:'action03'
              }
            ]
          },
          status:{
            select1:{
              selected:{
                name:'客户IP地址',
                id:'select101'
              },
              list:[
                {
                  name:'客户IP地址',
                  id:'select101'
                },
                {
                  name:'触发',
                  id:'select102'
                },
                {
                  name:'金额',
                  id:'select103'
                }
              ]
            },
            select2:{
              selected:{
                name:'在列表中',
                id:'select201'
              },
              list:[
                {
                  name:'在列表中',
                  id:'select201'
                },
                {
                  name:'大于1',
                  id:'select202'
                },
                {
                  name:'小于1',
                  id:'select203'
                }
              ]
            },
            select3:{
              selected:{
                name:'黑名单',
                id:'select301'  
              },
              list:[
               {
                  name:'黑名单',
                  id:'select301'
                },
                {
                  name:'50000',
                  id:'select302'
                },
                {
                  name:'10000',
                  id:'select303'
                }
              ]
            }
          },
          happened:1,
          ruleLimited:10,
          ruleScore:10
        },
                {
           actionList:{
            selected:{
               name:'登录',
               id:'action01'
            },
            list:[
              {
                name:'登录',
                id:'action01'
              },
              {
                name:'更新',
                id:'action02'
              },
              {
                name:'转帐',
                id:'action03'
              }
            ]
          },
          status:{
            select1:{
              selected:{
                name:'客户IP地址',
                id:'select101'
              },
              list:[
                {
                  name:'客户IP地址',
                  id:'select101'
                },
                {
                  name:'触发',
                  id:'select102'
                },
                {
                  name:'金额',
                  id:'select103'
                }
              ]
            },
            select2:{
              selected:{
                name:'在列表中',
                id:'select201'
              },
              list:[
                {
                  name:'在列表中',
                  id:'select201'
                },
                {
                  name:'大于1',
                  id:'select202'
                },
                {
                  name:'小于1',
                  id:'select203'
                }
              ]
            },
            select3:{
              selected:{
                name:'黑名单',
                id:'select301'  
              },
              list:[
               {
                  name:'黑名单',
                  id:'select301'
                },
                {
                  name:'50000',
                  id:'select302'
                },
                {
                  name:'10000',
                  id:'select303'
                }
              ]
            }
          },
          happened:1,
          ruleLimited:10,
          ruleScore:10
        }
      ]
    }
  },

  methods:{
    addAct:function(){
      var act ={
          actionList:{
            selected:{
               name:'登录',
               id:'action01'
            },
            list:[
              {
                name:'登录',
                id:'action01'
              },
              {
                name:'更新',
                id:'action02'
              },
              {
                name:'转帐',
                id:'action03'
              }
            ]
          },
          status:{
            select1:{
              selected:{
                name:'客户IP地址',
                id:'select101'
              },
              list:[
                {
                  name:'客户IP地址',
                  id:'select101'
                },
                {
                  name:'触发',
                  id:'select102'
                },
                {
                  name:'金额',
                  id:'select103'
                }
              ]
            },
            select2:{
              selected:{
                name:'在列表中',
                id:'select201'
              },
              list:[
                {
                  name:'在列表中',
                  id:'select201'
                },
                {
                  name:'大于1',
                  id:'select202'
                },
                {
                  name:'小于1',
                  id:'select203'
                }
              ]
            },
            select3:{
              selected:{
                name:'黑名单',
                id:'select301'  
              },
              list:[
               {
                  name:'黑名单',
                  id:'select301'
                },
                {
                  name:'50000',
                  id:'select302'
                },
                {
                  name:'10000',
                  id:'select303'
                }
              ]
            }
          },
          happened:1,
          ruleLimited:10,
          ruleScore:10
        };
      this.activityList.push(act);
    },
    rmAct:function(index){
      this.activityList.splice(index,1);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.create-fraud-rule{
  background: #fff;
  height: 95%;
  overflow: auto;
  font-size: 12px;
  box-shadow: 0px 0px 4px #333;
}
.create-fraud-rule .detailInfo .title{
  font-size: 14px;
  font-weight: bold;
  text-indent: 20px;
  line-height:50px;
  border-bottom: 2px solid #04acbb;
  color:#04acbb;
  text-shadow: 0 0 2px #eee;
  -webkit-text-shadow:0 0 2px #eee;
}
/*begin 头部按钮*/
.create-fraud-rule .header .detail{
  padding: 30px 0 0 30px;
}
.create-fraud-rule .header  .title{
  background: #04acbb;
  color: #fff;
}
.create-fraud-rule .header  button{
  width: 150px;
  height: 40px;
}
/*end 头部按钮*/


/*begin 每个部分的表单*/
.create-fraud-rule > .detailInfo{
  width: 100%;
}
.create-fraud-rule > .detailInfo .content{
  width: 92%;
  margin:0 auto;
}
.create-fraud-rule > .detailInfo .content li{
  border: 1px solid #d4d2d2;
  border-top: none;
  height: 50px;
  line-height: 50px;
}
.create-fraud-rule > .detailInfo .content li > *{
  display: inline-block;
  height: 100%;
 }

.create-fraud-rule > .detailInfo .content .left{
  color: #333;
  border-right: 1px solid #d4d2d2;
  width: 15%;
  text-align: center;
  font-weight: bold;
}

.create-fraud-rule > .detailInfo .content .right{
  width: 85%;
}
.create-fraud-rule > .detailInfo .content .right input[type="text"]{
  height: 38px;
  outline: none;
  border-radius: 4px;
  -webkit-border-radius: 4px;
  border: 1px solid #d4d2d2;
  text-indent: 20px;
}
.create-fraud-rule > .detailInfo .chooseUser.form-control{
  width: 50%;
  margin:9px auto;
}
.create-fraud-rule > .detailInfo .timeRange.form-control{
  display: inline-block;
  width:20%;
}
.fraudName{
  width: 30%;
}
.fraudDes{
  width: 50%;
}



/*begin 欺诈规则定义－得分*/
.getScore input[type="text"]{
  text-align: center;
  text-indent: 0 !important;
}
.getScore thead{
  background: #999;
  color:#fff;
}
/*end 欺诈规则定义－得分*/



/*begin  活动的*/
.create-fraud-rule > .detailInfo .content li.activity{
  height: 400px;
}
.create-fraud-rule > .detailInfo .content li.activity .table-content{
  height: 350px;
  width: 95%;
  margin: 50px auto;
  overflow: auto;
}

.create-fraud-rule > .detailInfo .content li.activity .left{
  line-height: 400px;
}
.create-fraud-rule > .detailInfo .content li.activity input[type="text"]{
  width:30px;
  text-indent: 0!important;
  text-align: center;
}
/*end 活动的*/


/*begin  警告消息*/
.warnNotice li{
  height: 100px !important;
  line-height: 100px !important;
}
.warnNotice textarea{
  height:80px;
  margin:10px auto;
  width:80%;
  resize: none;
  font-size: 12px;
}
/*end 警告消息*/


/*end 每个部分的表单*/
</style>
