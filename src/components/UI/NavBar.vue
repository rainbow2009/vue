<template>
  <div class="navbar">
  <div>
      vue 3
  </div>
  <div class="navbar_btns">
      <my-button @click="$router.push('/')" >Home page</my-button>
       <my-button  @click="$router.push('/posts')" style="margin-left:20px">Posts page</my-button>
        <my-button  @click="$router.push('/store')" style="margin-left:20px">Posts page Store</my-button>
  </div>
  </div>
</template>

<script>
export default {
 name: "nav-bar",
}
</script>

<style>
.navbar{
    height: 50px;
    background: lightgrey;
    box-shadow: 2px 2px 4px gray;
    display: flex;
    align-items: center;
    padding: 0 15px;

}
.navbar_btns{
    margin-left: auto;
}
</style>