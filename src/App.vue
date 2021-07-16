<template>
  <div class="app">
    <form @submit.prevent>
      <h4>create post</h4>
      <input
        :value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Name"
      />
      <input
        :value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Description"
      />
      <button class="btn" @click="createPost">CREATE</button>
    </form>

    <div class="posts" v-for="post in posts">
      <div><strong>Name </strong>{{ post.title }}</div>
      <div><strong>Description </strong>{{ post.body }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        { id: 1, title: "1st title", body: "body1" },
        { id: 2, title: "2st title", body: "body2" },
        { id: 3, title: "3st title", body: "body3" },
      ],
      body: "",
      title: "",
    };
  },
  methods: {
    createPost() {
        
      const newPost = {
        id: Date.now(),
        title: this.title,
        body: this.body,
      };
      this.posts.push(newPost);
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
.posts {
  padding: 15px;
  border: 2px solid teal;
  margin: 15px;
}
form {
  display: flex;
  flex-direction: column;
}
.input {
  width: 100%;
  border: 1px solid red;
  padding: 10px 15px;
  margin-top: 15px;
}
.btn {
  margin-top: 15px;
  align-self: flex-end;
}
</style>