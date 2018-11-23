<template>
  <div id="perfil">
    <section class="perfil">
      <perfil/>
    </section>
    <footer>
      <iop-footer/>
    </footer>
  </div>
</template>
<script>
import Perfil from "@/moduloA/components/perfil/Perfil";
export default {
  components: {
    Perfil
  }
};
</script>

<style>
.perfil {
  width: 100%;
  height: calc(100% - var(--footer-height));
}
#perfil footer {
  width: 100%;
  height: var(--footer-height);
}
#perfil {
  width: 100%;
  height: 100%;
  background-color: var(--bg-view);
  color: var(--text-color);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#perfil .full-size {
  width: 100%;
}
</style>
