<template>
  <div class="loader-wrap">
    <img class="loader" src="./../assets/loader.svg" alt="loader" />
  </div>
</template>

<script>
export default {
  name: "LoaderIcon",
};
</script>

<style scoped>
.loader-wrap {
  margin-top: 40px;
  text-align: center;
}
.loader {
  width: 40px;
  height: 40px;
}
</style>
