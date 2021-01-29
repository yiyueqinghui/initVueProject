<template>
  <div class="container">
      {{$Store.state.name}} 
      <el-button type="primary">主要按钮</el-button>
  </div>
</template>


<script>
  export default {
    data() {
      return {
      	input:''
        
      }
    },
    methods:{
      

    },
    mounted(){
      this.$nextTick(()=>{
         this.common.axiosPost('https://api.inews.qq.com/newsqa/v1/automation/modules/list',{
         	 modules:'FAutoGlobalStatis'
         }).then(res=>{
         	  debugger;
         })
      })
    }
  };
</script>

<style scoped="scoped">

</style>
