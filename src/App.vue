<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<style>
@import "./styles/colores.css";
@import "./styles/custom.dark-theme.css";
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  transition: 0.5s filter ease;
}
</style>
