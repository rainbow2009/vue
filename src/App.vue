<template>
  <div class="app">
    <post-form @create="createPost" />
    <post-list :posts="posts" />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
      posts: [
        { id: 1, title: "1st title", body: "body1" },
        { id: 2, title: "2st title", body: "body2" },
        { id: 3, title: "3st title", body: "body3" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
    },
  },
};
</script>

<style scoped >
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 20px;
}
</style>