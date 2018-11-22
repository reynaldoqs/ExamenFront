<template>
  <div id="app">
    <i-modals/>
    <router-view/>
  </div>
</template>
<script>
import IModals from "@/shared/modals/Modals";
export default {
  components: {
    IModals
  }
};
</script>
<style>
@import "./design/colores.css";
@import "./design/formatos.css";
@import "./design/custom.dark-theme.css";
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 0.5s filter ease;
}
</style>
