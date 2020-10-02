import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { RESOURCE_CATEGORY } from "../api/api";
Vue.use(Vuex);

const categoryStore = {
    state: {
        category: []
    },
    getters: {
        getcategoryfromgetter(state) {
            return state.category;
        }
    },
    actions: {
        allCategoryfromDB(context) {
            axios
                .get(RESOURCE_CATEGORY)
                .then(({ data }) => {
                    console.log(data.category);
                    context.commit("categories", data.categories);
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mutations: {
        categories(state, data) {
            return (state.category = data);
        }
    }
};
export { categoryStore };