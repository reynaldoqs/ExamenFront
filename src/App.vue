<template>
  <div id="app">
    <i-modals/>
    <moduloB/>
  </div>
</template>
<script>
import IModals from "@/shared/modals/Modals";
import moduloB from "@/moduloB/views/Main";
export default {
  components: {
    moduloB,
    IModals
  }
};
</script>
<style>
@import "./design/colores.css";

#app {
  transition: 0.5s filter ease;
}

/* Estilos globales para el modal/dialog */
body .con-vs-dialog .vs-dialog-dark {
  background: rgba(0, 0, 0, 0.65);
}
body .con-vs-dialog ~ #app {
  /*   -webkit-filter: blur(3px);
  filter: blur(3px); */
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
body .con-vs-dialog .vs-dialog header {
  background-color: transparent;
}
body .con-vs-dialog .vs-dialog {
  background-color: transparent;
  background-color: #232033;
}
body .con-vs-dialog .vs-dialog header span.after {
  background-color: transparent;
}
body .con-vs-dialog .vs-dialog header .vs-dialog-cancel {
  background-color: transparent;
  display: none;
}
body .con-vs-dialog .vs-dialog .vs-dialog-text {
  color: var(--app-text-secondary);
}
</style>
