import { createStore } from "vuex";

export default createStore({
    state: {
        likes: 2,
    },
    getters: {
        doubleLikes(state) {
            return state.likes * 2;
        }
    },
    mutations: {
        incrementLickes(state) {
            state.likes ++;
        },
        decrementLikes(state) {
            state.likes--;
        }
    },
    actions: {

    },
    modules: {

    }
})