import Vuex from "vuex";

import { categoryStore } from "./categoryStore";
import { productStore } from "./productStore";

const store = new Vuex.Store({
    modules: {
        category: categoryStore,
        products: productStore
    }
});

export { store };