<template>
  <div class="post">
    <div>
      <div>{{post.id}}</div>
      <div><strong>Name </strong>{{ post.title }}</div>
      <div><strong>Description </strong>{{ post.body }}</div>
    </div>
    <div class="post__btn">
      <my-button @click="$emit('remove', post)"> delete </my-button>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.post {
  padding: 15px;
  border: 2px solid teal;
  margin: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>