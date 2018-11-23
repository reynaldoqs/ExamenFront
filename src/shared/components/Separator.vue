<template>
  <div class="iop-separator"></div>
</template>
<script>
export default {
  name: "separator",
  props: {
    vertical: Boolean,
    horizontal: Boolean
  }
};
</script>
<style scoped>
.iop-separator {
  width: 1px;
  margin: 0 20px;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    transparent,
    rgba(255, 255, 255, 0.1) 20%,
    rgba(255, 255, 255, 0.1) 80%,
    transparent
  );
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 1px 100%;
  border-color: transparent;
}
</style>

