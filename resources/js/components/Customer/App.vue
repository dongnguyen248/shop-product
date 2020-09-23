<template>
    <div>
        <div v-for="category in getAllCategory" :key="category.id">
            {{ category.name }}
        </div>
    </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
    name: "List",
    ...mapGetters({
        notifications: "all"
    }),
    mounted() {
        this.$store.dispatch("allCategoryfromDB");
    },
    computed: {
        getAllCategory() {
            return this.$store.getters.getcategoryfromgetter;
        }
    }
};
</script>
<style scoped></style>
