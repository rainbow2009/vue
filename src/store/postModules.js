export const postModules = {
    state: () => ({
        posts: [],
        isPostLoading: false,
        selectedSort: "",
        searchQuery: "",
        page: 1,
        limit: 10,
        totalPages: 0,
        sortOptions: [
            { value: "title", name: "Name" },
            { value: "body", name: "Decription" },
        ],
    }),
    getters: {
        sortedPosts(state) {
            return [state.posts].sort((post1, post2) =>
              post1[state.selectedSort]?.localeCompare(post2[state.selectedSort])
            );
          },
          sortedAndSearchPost(state,getters) {
            return getters.sortedPosts.filter((post) =>
              post.title.toLowerCase().includes(state.searchQuery.toLowerCase())
            );
          },
    },
    mutations: {
        setPosts(state, post) {
            state.post = post;

        },
        setLoading(state, boll) {
            state.isPostLoading = state;
        },
        setPage(state, page) {
            state.page = page
        },
        setSelectedSort(state, selectedSort) {
            state.selectedSort = selectedSort
        },
        setTotalPages(state, totalPages) {
            state.totalPages = totalPages
        },
        setSearchQuery(state, searchQuery) {
            state.searchQuery = searchQuery
        }
    },
    actions: {

    }
}