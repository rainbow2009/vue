<template>
  <div>
    <h1>{{ $store.state.likes }}</h1>
    <div>
      <my-button @click="$store.commit('incrementLickes')">incrementLickes</my-button>
      <hr>
      <my-button @click="$store.commit('decrementLikes')">decrementLikes</my-button>
    </div>
    <h1>Post List</h1>
    <my-input v-model="searchQuery" placeholder="Search..." />
    <div class="app__btns">
      <my-button style="margin: 15px 0" @click="showDialog"
        >Create Post
      </my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form @create="createPost" />
    </my-dialog>
    <post-list
      v-if="!isPostLoading"
      :posts="sortedAndSearchPost"
      @remove="removePost"
    />
    <div v-else>Loading posts...</div>
    <div v-intersection="loadMorePost" class="observer"></div>
  </div>

  <my-plaginate v-model="page" :page="page" :totalPages="totalPages" />
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import axios from "axios";

export default {
  components: {
    PostForm,
    PostList,
  },
  data() {
    return {
    
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.dialogVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("error");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePost() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("error");
      }
    },
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    // },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
   
  },
  watch: {
    // page() {
    //   this.fetchPosts();
    // },
    // selectedSort(newValue) {
    //   this.posts.sort((post1, post2) => {
    //     return post1[newValue]?.localeCompare(post2[newValue]);
    //   });
    // },
  },
};
</script>

<style scoped >
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
.observer {
  height: 30px;
  background: black;
}
</style>