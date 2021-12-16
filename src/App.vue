<style lang="less">
  @import "./App.less";
</style>

<template>
  <div id="app">
    <div>
      <!-- <Home/> -->
      <!-- <Adduser/> -->
      <!-- <Viewuser/> -->
    </div>
     <router-view/>
  </div>
  
</template>

<script>
import Home from './components/Home/Home.vue'
import Adduser from "./components/Adduser/Adduser.vue"
import Viewuser from "./components/Viewuser/Viewuser.vue"
export default {
  name: 'App',
  components: {
    Home , Adduser ,Viewuser
    }
}
</script>




