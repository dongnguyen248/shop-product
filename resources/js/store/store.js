import Vuex from "vuex";

import { categoryStore } from "./categoryStore";

const store = new Vuex.Store({
    modules: {
        category: categoryStore
    }
});

export { store };