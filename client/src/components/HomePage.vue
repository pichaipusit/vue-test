<template>
  <div>
    Congrat! You're logged in
    <NavMenu />
  </div>
</template>

<script>
import NavMenu from "./NavMenu.vue";

export default {
  name: "HomePage",
  components: { NavMenu },
};
</script>

<style scoped></style>
