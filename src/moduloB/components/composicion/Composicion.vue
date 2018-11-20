<template>
    <div class="composicion-container">
       <div class="composicion-list">
        <div class="left">
            <search-bar
            :composicionModel="composicionModel"
            @onQuery="search"
            @onDelete="deleteParametro"
            />
            <vs-button @click="saveComposicion" :disabled="!composicionModel.rutas.length > 0" class="save-option" radius size="large"  color="success" type="gradient" icon="save"></vs-button>
        </div>
        <div class="right vs-con-loading__container" id="parametros-list" >
            <parametros-list
            
            :parametros="parametros"
            @onSelect="selectParametro"
            />
        </div>
       </div>
    </div>
</template>
<script>
import SearchBar from "./SearchBar";
import ParametrosList from "./ParametrosList";
import { composicionApi } from "@/services";
export default {
  data: () => ({
    userParametros: [],
    parametros: []
  }),
  methods: {
    saveComposicion() {
      let idPerfil = "5bd21b2277e73d38dfc5edf2";

      let clonModel = JSON.parse(JSON.stringify(this.composicionModel));

      clonModel.nombre = "rutaHechaFront";
      clonModel.descripcion = "Descripcion front";

      let composicionToSave = {
        nombre: clonModel.nombre,
        descripcion: clonModel.descripcion,
        rutas: clonModel.rutas.map(rata => {
          return {
            ruta: rata.ruta._id,
            servicio: rata.servicio,
            parametrosEntrada: rata.parametrosEntrada.map(p => p._id),
            parametrosRespuesta: rata.parametrosRespuesta.map(p => ({
              parametroRespuesta: p.parametroRespuesta._id
            }))
          };
        })
      };
      composicionApi
        .guardarComposicion({
          idPerfil,
          composicion: composicionToSave
        })
        .then(data => {
          this.$vs.notify({
            title: "Composición guardara",
            text: "la composicion ha sido guardada con exito",
            color: "#28a745",
            icon: "verified_user"
          });
          console.log("resp server", data);
        })
        .catch(err => {
          this.$vs.notify({
            title: "Error al guardar",
            text: err.data.message,
            color: "#ff4f81",
            icon: "verified_user"
          });

          console.log("resp err server", err);
        });
    },
    deleteParametro(id) {
      let index = this.userParametros.findIndex(data => data._id === id);
      if (index !== -1) {
        this.userParametros.splice(index, 1);
      }
    },
    search(query) {
      alert(JSON.stringify(query));
    },
    selectParametro(parametro) {
      let selectedObj = JSON.parse(JSON.stringify(parametro));
      if (this.userParametros.length === 0) {
        this.userParametros.push(selectedObj);
        return;
      }
      this.checkAndPush(this.userParametros, selectedObj);
    },
    checkAndPush(anArray, anObject) {
      if (anArray.find(data => data._id === anObject._id)) {
        alert("Ya tienes seleccionado este parametro");
        return;
      }
      anArray.push(anObject);
    },
    loadParametros() {
      this.$vs.loading({
        background: "transparent",
        color: "#717171",
        container: "#parametros-list",
        type: "corners"
      });
      composicionApi
        .parametros()
        .then(data => {
          this.parametros = data.data;
          this.$vs.loading.close("#parametros-list > .con-vs-loading");
        })
        .catch(err =>
          this.$vs.loading.close("#parametros-list > .con-vs-loading")
        );
    },
    getComposicionModel(anArray) {
      let rutas = [];
      //obtiene identificadores para agruparlos
      anArray.map(data => {
        if (rutas.findIndex(i => data.idRespuesta.idRuta._id === i) === -1) {
          rutas.push(data.idRespuesta.idRuta._id);
        }
      });
      // los agrupa por los identificadores
      let rutasGroups = rutas.map(ruta => {
        let elements = anArray.filter(
          data => data.idRespuesta.idRuta._id === ruta
        );
        return elements;
      });
      // construimos el modelo de composicon
      let composiconModel = {
        descripcion: null,
        nombre: null,
        rutas: rutasGroups.map(group => {
          return {
            //poner los key des descripcion de uso
            parametrosEntrada: group[0].parametrosEntrada,
            ruta: group[0].idRespuesta.idRuta,
            servicio: group[0].idRespuesta.idRuta.idServicio,
            parametrosRespuesta: group.map(subRuta => {
              return {
                parametroRespuesta: {
                  _id: subRuta._id,
                  nombre: subRuta.nombre,
                  descripcion: subRuta.descripcion,
                  tipo: subRuta.tipo,
                  valorEjemplo: subRuta.valorEjemplo
                }
              };
            })
          };
        })
      };
      return composiconModel;
    }
  },
  computed: {
    composicionModel() {
      return this.getComposicionModel(this.userParametros);
    }
  },
  mounted() {
    this.loadParametros();
  },
  components: {
    SearchBar,
    ParametrosList
  }
};
</script>

<style scoped>
.composicion-list {
  display: flex;
  --left-width: 480px;
}
.left {
  width: var(--left-width);
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
  position: relative;
}
.right {
  width: calc(100% - var(--left-width));
  height: 100vh;
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
.save-option {
  position: fixed;
  top: calc(100vh - 60px);
  left: calc(var(--left-width) - 60px);
}
</style>
