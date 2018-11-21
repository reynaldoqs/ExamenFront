<template>
    <vs-prompt
   
      @vs-cancel="val=''"
      @vs-accept="acceptAlert"
      @vs-close="close"
      :vs-color="color"
      :vs-title="title"
      :vs-active.sync="dialogVisible"
      :vs-is-valid="isValid"
      vs-accept-text="Aceptar"
      vs-cancel-text="Cancelar"
      vs-buttons-hidden
      >
       <div class="modal-container">
          <component v-if="dialogVisible" :is="currentComponent" v-on:closeModal="dialogVisible = false" :data="data"/>         
       </div>
     </vs-prompt> 
</template>

<script>
import GuardarComposicion from "@/moduloB/components/composicion/modal.ComposicionSave";
export default {
  data() {
    return {
      dialogVisible: false,
      currentComponent: "",
      val: "asdad",
      data: {},
      title: "modal",
      color: "success"
    };
  },
  computed: {
    isValid() {
      return this.$refs.componente ? this.$refs.componente.valid : false;
    }
  },
  components: {
    "guardar-composicion": GuardarComposicion
  },
  methods: {
    acceptAlert(color) {
      this.$vs.notify({
        color: "success",
        title: "Accept Selected",
        text: "Lorem ipsum dolor sit amet, consectetur"
      });
    },
    close() {
      this.dialogVisible = false;
    },
    open() {
      this.dialogVisible = true;
    },
    set(data, title, color = "success") {
      this.data = data;
      this.title = title;
      this.color = color;
      this.currentComponent = title
        .split(" ")
        .join("-")
        .toLowerCase();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$hub.$on("set-modal-data", this.set);
      this.$hub.$on("open-modal", this.open);
    });
  },
  destroyed() {
    this.$hub.$off("set-modal-data", this.set);
    this.$hub.$off("open-modal", this.open);
  }
};
</script>
