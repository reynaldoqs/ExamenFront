<template>
  <div class="perfiles-container">
    <section class="perfiles-section">
      <component
        :is="currentComponent"
        @onAdd="addPerfil"
      />
    </section>
  </div>
</template>
<script>
import perfilesApi from "@/services";
import { mapGetters } from "vuex";
import Selection from "./Selection";
import Creation from "./Creation";
import Edition from "./Edition";
export default {
  data: () => ({
    currentComponent: "selection"
  }),
  watch: {
    "$route.query"(newValue) {
      this.currentComponent = newValue.perfil;
    }
  },
  methods: {
    addPerfil() {
      this.$router.push({ query: { perfil: "creation" } });
    }
  },
  components: {
    Selection,
    Creation,
    Edition
  },
  mounted() {
    if (this.isAuthenticated) {
      this.$store.dispatch("loadPerfiles", this.currentUser.id);
    }
    if (!this.$route.query.perfil) {
      this.$router.push({ query: { perfil: "selection" } });
    }
  },
  computed: {
    ...mapGetters(["currentUser", "isAuthenticated"])
  }
};
</script>
<style scoped>
.perfiles-container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.perfiles-section {
  width: 1200px;
  max-width: 100%;
  /* background-color: var(--bg-content); */
}
@media (max-width: 700px) {
  .perfiles-container {
    padding: 0;
  }
}
</style>
