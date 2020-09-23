import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
import { RESOURCE_PRODUCT } from "../api/api";

Vue.use(Vuex);

const productStore = {
    namespaced: true,
    state: {
        products: [],
        product: {}
    }
};