<style lang="less">
  @import "./App.less";
</style>

<template>
  <div id="app">
    <div>
      <!-- <Home/> -->
      <!-- <Adduser/> -->
    </div>
     <router-view/>
  </div>
  
</template>

<script>
import Home from './components/Home/Home.vue'
import Adduser from "./components/Adduser/Adduser.vue"
export default {
  name: 'App',
  components: {
    Home , Adduser 
    }
}
</script>




