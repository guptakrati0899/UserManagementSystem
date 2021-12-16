<template>
    <div>
        <div class="welcome-outer">
      <div class="welcome">
        <h1>Welcome To User Management</h1>
      <button @click="addRoute()">Add user</button>
      </div>
    </div>
    </div>
</template>

<script>
import {Home} from './Home'
export default Home
</script>

<style lang="less">
  @import "./Home.less";
</style>