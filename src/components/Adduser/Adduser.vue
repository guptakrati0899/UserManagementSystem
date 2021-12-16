<template>
<body>

<form >
  <div class="container">
    <h1>Add User</h1>
    <p>Please fill in this form to add an user.</p>
    <hr>

    <label for="email"><b>Name</b></label>
    <input type="text" placeholder="Enter Name" name="name" id="name" required>

    <label for="psw"><b>Email</b></label>
    <input type="text" placeholder="Enter Email" name="email" id="email" required>

    <label for="psw-repeat"><b>PhoneNumber</b></label>
    <input type="text" placeholder="Enter Phone Number" name="phonenumber" id="phonenumber" required>

    <button type="submit" class="registerbtn" @click="submit($event)">Add User and View</button>
    
  </div>
  
</form>


</body>


</template>

<script>
import {Adduser} from './Adduser'
export default Adduser
</script>

<style lang="less">
  @import "./Adduser.less";
</style>