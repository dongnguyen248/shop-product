<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from "./navbar";
export default {
  components: {
    Navbar,
  },
};
</script>