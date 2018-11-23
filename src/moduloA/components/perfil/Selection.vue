<template>
  <div class="perfil-selection"> 
    <header class="perfil-selection-title"> 
      <h3>Selección de perfil</h3>
      <p>
         El perfil estará asociado a todos los consumos que realize,
        {{userPerfiles.length > 0? 'seleccione un perfil para continuar':'debe agregar un perfil para continuar'}}
      </p>
    </header>
    <div class="selector">
      <perfil-avatar
        v-for="perfil in userPerfiles"
        :key="perfil.id"
        :nombre="perfil.nombre"
        :urlImagen="perfil.urlImagen"
        :descripcion="perfil.descripcion"
        :estado="perfil.estado"
        :esProduccion="perfil.esProduccion"
        :idPerfil="perfil.id"
        :isSelected="false"
        @onSelect="perfil.esProduccion?showPerfil(perfil.id):selectPerfil(perfil.id)"
        @onDelete="deletePerfil(perfil.id)"
        @onEdit="editPerfil(perfil.id)"
      />
      <perfil-add
        @onAdd="$emit('onAdd')"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PerfilAvatar from "./PerfilAvatar";
import PerfilAdd from "./PerfilAdd";
export default {
  name: "perfiles-selection",
  components: {
    PerfilAvatar,
    PerfilAdd
  },
  methods: {
    showPerfil(idPerfil) {
      console.log("detalles del perfil after-production");
    },
    selectPerfil(idPerfil) {
      this.$store.dispatch("changePerfil", idPerfil);
      if (this.isAuthenticated && this.hasPerfil) {
        this.$router.push({ name: "composicion" });
      }
    },
    deletePerfil(idPerfil) {
      if (this.isAuthenticated) {
        /* this.$confirm(
          "El perfil será eliminado permanentemente, <br><strong>¿Desea continuar?</strong>",
          " Precaución",
          {
            confirmButtonText: "Continuar",
            cancelButtonText: "Cancelar",
            type: "warning",
            roundButton: true,
            dangerouslyUseHTMLString: true,
            center: true
          }
        )
          .then(() => {
            this.$store.dispatch("removePerfil", {
              clientId: this.currentUser.id,
              idPerfil: idPerfil
            });
          })
          .catch(() => {
            console.warn("deletion canceled");
          }); */
      } else {
        console.error("not authenticated");
      }
    },
    editPerfil(idPerfil) {
      this.$router.push({
        query: { perfil: "edition", perfil: idPerfil }
      });
    }
  },
  computed: {
    ...mapGetters([
      "userPerfiles",
      "hasPerfil",
      "isAuthenticated",
      "currentPerfil",
      "currentUser"
    ])
  }
};
</script>
<style scoped>
.selector {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.perfil-selection-title {
  text-align: center;
  padding: 10px 10px 30px 10px;
}
.perfil-selection-title > p {
  color: var(--text-small);
  margin-top: 6px;
}
.perfil-selection-title > h3 {
  font-size: 1.3em;
}
</style>
