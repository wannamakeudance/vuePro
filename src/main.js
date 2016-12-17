// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css';

/* eslint-disable no-new */


Vue.config.debug = true;

Vue.use(VueRouter);

import MasterConsole from './components/rightContent/MasterConsole'
import RuleManagement from './components/rightContent/RuleManagement'
import FraudRule from './components/rightContent/FraudRule'
import SysManagement from './components/rightContent/SysManagement'
const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
  	{
  		path:'/quickPreview',
  		component:MasterConsole
  	},
  	{
  		path:'/start',
  		component:MasterConsole
  	},
  	{
  		path:'/search',
  		component:MasterConsole
  	},
  	{
  		path:'',
  		component:MasterConsole
  	},
    {
      path: '/masterConsole',
      component: MasterConsole
    },
    {
      path: '/ruleManagement',
      component: RuleManagement
    },
    {
      path: '/fraudRules',
      component: FraudRule
    },
    {
    	path:'/systemManagement',
    	component:SysManagement
    }
  ]
})

var a=require( 'jquery')
 window.jQuery = a;
 window.$ = a;
console.log($)
 var label_better=require('label-better/jquery.label_better.js')

new Vue({
  router: router,
  components:{
  	App
  },
  template:'<App/>',
  el:'#fireradarXadmin',
  render: h => h(App)
}).$mount('#fireradarXadmin')

