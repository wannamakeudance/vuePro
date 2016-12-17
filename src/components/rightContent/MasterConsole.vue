<template>
  <div class="master-console">
  	<!-- begin 项目运行状况 -->
  	<div class="proInfo">
  	  <div class="head">
        <button class="btn btn-success pull-right fireradarX-m-r-10">刷新</button>
        <button class="btn btn-primary pull-right fireradarX-m-r-10">重启</button>
        <button class="btn btn-warning pull-right fireradarX-m-r-10">停止</button> 
      </div>
      <div class="content">
        <img src="../../assets/images/computer.png">
        <ul class="total-num ">
          <li>注册用户数：80000</li>
          <li>欺诈用户数：20000</li>
          <li>客户应用ID:idwilliam</li>
        </ul>
        <ul class="total-status ">
          <li class="status">状态：运行中</li>
          <li>网络类型：经典网络</li>
        </ul>
      </div>
  	</div>
  	<!-- end 项目的运行状况 -->

  	<!-- begin 规则触发统计 -->
  	<div class="ruleStatus">
  		
  	</div>
  	<!-- end 规则触发统计 -->


  	<!-- begin 欺诈用户影响数目 -->
  	<div class="influencedNum">
  		
  	</div>
  	<!-- end 欺诈用户影响数目 -->

  </div> 
</template>

<script>
import $ from 'jquery/dist/jquery.min.js'
import echarts from 'echarts/dist/echarts.min.js'
export default {
  name: 'masterConsole',
  data () {
    return {
     
    }
  },
  mounted:function(){
     var el1 =  echarts.init($('.ruleStatus')[0]);
     var option1 = {
          title : {
              text: '规则触发统计'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['薅羊毛','刷单','活动作弊','黑名单']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  axisLabel : {
                      formatter: '{value}'
                  }
              }
          ],
          series : [
              {
                  name:'薅羊毛',
                  type:'line',
                  data:[11, 11, 15, 13, 12, 13, 10,1, 11, 15, 13, 7, 13, 10,7, 11, 15, 13, 12, 13, 13,1, 11, 15],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'刷单',
                  type:'line',
                  data:[1, 6, 5, 2, 6, 8, 9,2, 10, 5, 1, 7, 2, 10,7, 5, 3, 1, 5, 3, 7,1, 9, 5, 3, 2, 3, 2,6,2,30],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              },
              {
                  name:'活动作弊',
                  type:'line',
                  data:[2, 13, 7, 2, 12, 13, 10,1, 11, 15, 13, 7, 13, 10,7, 11, 15, 13, 12, 13, 13,1, 11, 15, 1],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'黑名单',
                  type:'line',
                  data:[9, 11, 7, 2, 5, 13, 10,1, 11, 15, 13, 2, 13, 10,7, 11, 15, 13, 12, 13, 13,1, 11, 10, 2],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              }
          ]
     };
     el1.setOption(option1);

     var el2 =  echarts.init($('.influencedNum')[0]);
     var option2 = {
          title : {
              text: '欺诈影响用户数'
          },
          tooltip : {
              trigger: 'axis'
          },
          legend: {
              data:['薅羊毛','刷单','活动作弊','黑名单']
          },
          toolbox: {
              show : true,
              feature : {
                  mark : {show: true},
                  dataView : {show: true, readOnly: false},
                  magicType : {show: true, type: ['line', 'bar']},
                  restore : {show: true},
                  saveAsImage : {show: true}
              }
          },
          calculable : true,
          xAxis : [
              {
                  type : 'category',
                  boundaryGap : false,
                  data : ['00:00','01:00','02:00','03:00','04:00','05:00','06:00','07:00','08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00','19:00','20:00','21:00','22:00','23:00']
              }
          ],
          yAxis : [
              {
                  type : 'value',
                  axisLabel : {
                      formatter: '{value}'
                  }
              }
          ],
          series : [
              {
                  name:'薅羊毛',
                  type:'line',
                  data:[11, 11, 15, 13, 12, 13, 10,1, 11, 15, 13, 7, 13, 10,7, 11, 15, 13, 12, 13, 13,1, 11, 15],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'刷单',
                  type:'line',
                  data:[1, 6, 5, 2, 32, 8, 9,2, 10, 5, 1, 7, 2, 10,7, 5, 3, 1, 5, 3, 7,1, 9, 5, 3, 2, 3, 2,6,2,2],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name : '平均值'}
                      ]
                  }
              },
              {
                  name:'活动作弊',
                  type:'line',
                  data:[2, 13, 7, 2, 12, 13, 10,1, 11, 15, 13, 7, 13, 10,7, 11, 15, 13, 12, 13, 13,1, 11, 15, 13],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              },
              {
                  name:'黑名单',
                  type:'line',
                  data:[9, 11, 7, 2, 5, 13, 10,1, 11, 15, 13, 2, 13, 10,7, 11, 15, 13, 12, 13, 13,1, 11, 10, 15],
                  markPoint : {
                      data : [
                          {type : 'max', name: '最大值'},
                          {type : 'min', name: '最小值'}
                      ]
                  },
                  markLine : {
                      data : [
                          {type : 'average', name: '平均值'}
                      ]
                  }
              }
          ]
     };
     el2.setOption(option2);
  },
  methods:{
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.master-console{
  width: 100%;
  height: 100%;
  overflow: auto;
}
.master-console >div{
  margin-bottom: 20px;
  background: #fff !important;
}
.proInfo{
  height: 250px;
}
.proInfo .head{
  padding-top: 20px;
  height: 20%;
}
.proInfo .content{
  height: 80%;
  vertical-align: middle;
}
.proInfo .content:after{
  display: inline-block;
  content: '';
  vertical-align: middle;
  height: 100%;
}
.proInfo .content > *{
  padding-left: 14%;
  display: inline-block;
  vertical-align: middle;
}
.proInfo .content img{
  width: 18%;
}
.ruleStatus,.influencedNum{
  padding: 40px;
  height: 400px;
}
.total-num li{
  list-style:square;
  color:#119eab !important;
  font-weight: bold;
}
.total-status .status{
  color: #4e9a4e;
  font-weight: bold;
}
.total-num li,.total-status li{
  font-size:bold;
  color:#333;
  line-height: 50px;
}

</style>
