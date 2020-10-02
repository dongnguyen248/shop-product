import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { RESOURCE_PRODUCT } from "../api/api";

Vue.use(Vuex);

const productStore = {
    // namespaced: true,
    state: {
        products: [],
        product: {}
    },
    getters: {
        getproducts(state) {
            return state.products;
        }
    },
    mutations: {
        FETCH(state, products) {
            state.products = products
        },
        FETCH_ONE(state, product) {
            state.product = product
        }

    },
    actions: {
        allProductfromDB(context) {
            axios
                .get(RESOURCE_PRODUCT)
                .then(({ data }) => {
                    console.log(data.products);
                    context.commit("FETCH", data.products);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        fetchOne({ commit }, id) {
            axios.get(`${RESOURCE_PRODUCT}/${id}/edit`)
                .then(response => commit("FETCH_ONE", response.data))
                .catch(err => { console.log(err) });
        },
        editProduct({}, product) {
            axios.put(`${RESOURCE_PRODUCT}/${product.id}`, {
                    name: product.name,
                    description: product.description,
                    category: product.category,
                    price: product.price,
                    photo: product.photo
                })
                .then(() => this.dispatch("fetch"))
                .catch(err => { console.log(err) })

        },
        addProduct({}, product) {
            axios.post(`${RESOURCE_PRODUCT}`, {
                name: product.name,
                description: product.description,
                category: product.category,
                price: product.price,
                photo: product.photo

            }).catch(Error => {
                console.log(Error);
            })
        },
        deleteProduct({}, id) {
            axios.put(`${RESOURCE_PRODUCT}/${id}`)
                .then(() => this.dispatch("fetch"))
                .catch(err => { console.log(err) });
        }
    }
};
export {
    productStore
}