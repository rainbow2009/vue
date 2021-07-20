<template>
  <div class="page__wrapper">
      <div 
      class="page" 
      v-for="pageNumber in totalPages"
       :key="pageNumber"
       :class="{
         'current__page': page === pageNumber
       }"
       @click="changePage(pageNumber)"
       >{{ pageNumber }}</div>
    </div>
</template>

<script>
export default {
  name:'my-plaginate',
  props:{
      totalPages:{
          type: Number,
      },
      page:{
          type: Number
      }
  },
  methods:{
     changePage(e){
        this.$emit('update:modelValue', e)
     }
  }
}
</script>

<style>
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid black;
  padding: 15px;
}
.current__page{
  border: 2px solid rgb(11, 238, 238);
}
</style>