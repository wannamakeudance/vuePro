<template>
  <div class="rule-table">
    <table class="table table-hover">
      <thead>
        <tr>
          <td v-for="item in ruleTable.head">
            {{item}}
          </td>  
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in ruleTable.ruleContent">
          <td>{{item.isEnable}}</td>
          <td>{{item.fraudRule}}</td>
          <td>{{item.type}}</td>
          <td>{{item.combination}}</td>
          <td>{{item.riskScore.score}}</td>
          <td>{{item.establishDate}}</td>
          <td>{{item.updateDate}}</td>
          <td>{{item.relatedTmp}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import $ from 'jquery/dist/jquery.min.js'
export default {
  name: 'ruleManagement',
  data () {
    return {
      ruleTable:{
        head:['启用','欺诈规则','类型','组合中','生成与否/风险值','创建','更新','相关模版'],
        ruleContent:[
          {
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },
          {
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },
          {
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },
          {
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },
          {
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },{
            isEnable:true,
            fraudRule:'薅羊毛',
            type:'类型一',
            combination:'是',
            riskScore:{
              generated:true,
              score:80
            },
            establishDate:'2015/08/11',
            updateDate:'2016/09/11',
            relatedTmp:'模版一'
          },
        ]
      }
    }
  },
  mounted:function(){
     
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.rule-table thead,.rule-table tbody{
  display: block;
}
.rule-table td{
  width: 220px;
}
.rule-table tbody{
  background: #fff;
  height: 68%;
  overflow: auto;
}
.rule-table thead{
  background: #999;
  color: #fff; 
}
.rule-table table{ 
  text-align: center;
}
.rule-table td{
  line-height: 45px;
}
</style>
