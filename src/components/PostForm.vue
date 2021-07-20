<template>
  <form @submit.prevent>
    <h4>create post</h4>
    <my-input  v-focus v-model="post.title"  type="text" placeholder="Name" />
    <my-input
      v-model="post.body"
      type="text"
      placeholder="Description"
    />
    <my-button
      @click="createPost"
      style="align-self: flex-end; margin-top: 15px"
      class="btn"
    >
      CREATE
    </my-button>
  </form>
</template>

<script>
import MyInput from './UI/MyInput.vue';
export default {
  components: { MyInput },
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}

</style>