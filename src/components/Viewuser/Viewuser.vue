<template>
      <div>
      <div>Edit user</div>
      <div v-for="(post, index) in values" :key="index">
        <div v-if="index!=0">
          <span>{{post}}{{index}}</span> <span><button>Edit</button></span> <span><button>Delete</button></span>
        </div>
      </div>
    </div>
 
</template>

<script>
import {Viewuser} from './Viewuser'
export default Viewuser
</script>

<style lang="less">
  @import "./Viewuser.less";
</style>