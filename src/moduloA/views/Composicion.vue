<template>
  <div id="composicion">
    <section class="composicion">
      <composicion/>
    </section>
    <footer>
      <iop-footer/>
    </footer>
  </div>
</template>
<script>
import Composicion from "@/moduloA/components/composicion/Composicion";
export default {
  components: {
    Composicion
  }
};
</script>
<style>
.composicion {
  width: 100%;
  height: calc(100% - var(--footer-height));
}
#composicion footer {
  width: 100%;
  height: var(--footer-height);
}
#composicion {
  width: 100%;
  height: 100%;
  background-color: var(--bg-view);
  color: var(--text-color);
  font-size: var(--text-size);
}
#composicion .label-text {
  color: var(--text-color);
  font-size: 0.85em;
  font-weight: 500;
}
#composicion .full-size {
  width: 100%;
}
</style>
