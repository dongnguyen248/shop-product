import Home from "../components/Admin/Home.vue";
import Dashboard from "../components/Admin/Dashboard.vue";
import Profile from "../components/Admin/Profiles.vue";
import Users from "../components/Admin/User.vue";
import Developer from "../components/Admin/Developer";
import Product from "../components/Admin/Products.vue";
import Category from "../components/Admin/Category.vue";

let routes = [
    { path: "/admin-dashboard", component: Dashboard },
    { path: "/admin-profile", component: Profile },
    { path: "/admin-users", component: Users },
    { path: "/admin-developer", component: Developer },
    { path: "/admin-product", component: Product },
    { path: "/admin-category", component: Category },
    // { path: "/product-details", component: ProductDetail },
];

export { routes };