<template>
    <div class="composicion" id="composicion">
        <div class="fake-nav-bar"></div>
        <composicion/>
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
.fake-nav-bar {
  width: 100%;
  height: 40px;
  background-color: var(--iop-accent);
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
  font-size: 0.9em;
  font-weight: 600;
}
#composicion .full-size {
  width: 100%;
}
</style>
