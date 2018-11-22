<template>
  <div class="guardar-composicion">
      <p>Datos necesarios antes de guardar la <b>composición</b>.</p>
         <div class="inputs">
          <vs-input @keyup.enter="saveComposicion" placeholder="Nombre" v-model="information.nombre"/>
          <vs-input @keyup.enter="saveComposicion" placeholder="Descripción" v-model="information.descripcion"/>
         </div>
      <footer>
          <vs-button @click="$emit('closeModal')" color="#d1d1d1" type="flat">Cancelar</vs-button>
          <vs-button @click="saveComposicion" :disabled="!valid" type="gradient" color="success">Aceptar</vs-button>
      </footer>
  </div>
</template>
<script>
export default {
  data: () => ({
    information: {
      nombre: "",
      descripcion: ""
    }
  }),
  methods: {
    saveComposicion() {
      this.$hub.$emit("saveComposicion", this.information);
      this.$emit("closeModal");
    }
  },
  computed: {
    valid() {
      return this.information.nombre.length > 0;
    }
  }
};
</script>
<style scoped>
.guardar-composicion {
  padding: var(--modal-padding);
}
.vs-input {
  width: 100%;
}
.vs-input:not(:last-child) {
  margin-bottom: 18px;
}
p {
  font-size: 15px;
  line-height: 22px;
  margin-bottom: 10px;
  color: var(--app-text-secondary);
}
footer {
  position: relative;
  left: 20px;
  bottom: -16px;
}
</style>
