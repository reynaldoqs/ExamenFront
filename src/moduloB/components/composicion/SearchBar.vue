<template>
    <div class="search-bar">
        <vs-row
          class="search-options"
          vs-align="center"
          vs-type="flex" vs-justify="flex-start" vs-w="12">
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="4">
          <div class="label-text">
            Buscar parámetro:
          </div>
        </vs-col> 
        <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="8">
          <vs-input icon="search"
          icon-after="true"
          size="normal"
          class="dark-theme full-size" 
          vs-placeholder="Buscar..."
          placeholder="Buscar..."
          v-model="query"
          @keyup.enter="sendQuery"
          />
        </vs-col>
        </vs-row>
        <vs-row
        class="search-options"
        vs-align="center"
        vs-type="flex" vs-justify="flex-start" vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="4">
                <div class="label-text">
                    Busqueda por:
                </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="8">
                <vs-select
                color="primary"
                class="dark-theme full-size"
                v-model="searchBy"
                    >
                    <vs-select-item v-for="(item,index) in searchOptions" :key="index" :value="item.value" :text="item.text"  />
                </vs-select>
            </vs-col>
        </vs-row>
        <hr class="separator">
        <vs-select
            description-text="Selección de servicios"
            color="primary"
            class="dark-theme full-size"
            v-model="filterBy"
            multiple
            autocomplete
            max-selected=4
            placeholder="Filtrar servicios"
            >
        <vs-select-item :key="servicio._id" :value="servicio._id" :text="servicio.nombre" v-for="servicio in servicios" />
        </vs-select>

        <hr class="separator">
        <div class="label-text">
            Parametros de Salida
        </div>
        <div class="parametros-container">
            <div v-show="!parametrosSalida.length > 0" class="no-result-message">
                No tiene parámetros seleccionados
            </div>
            <parametro
            v-for="parametro in parametrosSalida"
            :key="parametro._id"
            :nombre="parametro.nombre"
            tipo="respuesta" ubicacion="body"
            @onDelete="$emit('onDelete',parametro._id)"
            /> 
        </div> 
        <hr class="separator">
        <div class="label-text">
            Parametros de entrada
        </div>
        <div class="parametros-container">
            <div v-show="!parametrosSalida.length > 0" class="no-result-message">
                No tiene parámetros de entrada
            </div>
            <parametro  v-for="parametro in parametrosEntrada" :key="parametro._id" :nombre="parametro.nombre" tipo="entrada" :ubicacion="parametro.ubicacion"/> 
        </div>
        <hr class="separator">
        <div class="label-text">
            Servicios
        </div>
        <div class="parametros-container">
            <div v-show="!serviciosSeleccionados.length > 0" class="no-result-message">
                No tiene parámetros seleccionados
            </div>
            <span
            v-for="(servicio, index) in serviciosSeleccionados"
            :key="index"
            class="small-list">
            {{servicio}}</span>
        </div>
        <hr class="separator">
        <div class="label-text">
            Rutas
        </div>
        <div class="parametros-container">
            <div v-show="!rutasSeleccionadas.length > 0" class="no-result-message">
                No tiene parámetros seleccionados
            </div>
            <span
                v-for="(ruta, index) in rutasSeleccionadas"
                :key="index"
                class="small-list">
            {{ruta}}</span>
        </div>
        <div class="gosht-div">
          <pre>
            {{parametrosEntrada}}
          </pre>
        </div>
    </div>
</template>
<script>
import Parametro from "./SearchBarParametro";
export default {
  data: () => ({
    query: "",
    searchBy: 1,
    filterBy: [],
    searchOptions: [
      { text: "Parametro", value: 1 },
      { text: "Descripcion", value: 2 },
      { text: "Palabras Clave", value: 3 }
    ]
  }),
  props: {
    composicionModel: Object,
    serviciosList: Array
  },
  watch: {
    filterBy(newValue) {
      this.$emit("filterChange", this.filterBy);
    }
  },
  methods: {
    sendQuery() {
      if (this.query && this.query !== "") {
        this.$emit("onQuery", {
          query: this.query,
          searchBy: this.searchBy
        });
        return;
      }
      console.warn("query is empty");
    }
  },
  computed: {
    servicios() {
      let controllers = this.serviciosList.filter(data => data);
      return controllers.filter(
        (item, pos) => controllers.map(a => a._id).indexOf(item._id) == pos
      );
    },
    parametrosSalida() {
      if (this.composicionModel.rutas.length > 0) {
        return this.composicionModel.rutas
          .map(ruta => {
            return ruta.parametrosRespuesta.map(
              param => param.parametroRespuesta
            );
          })
          .reduce((count, item) => [...count, ...item]);
      }
      return [];
    },
    parametrosEntrada() {
      if (this.composicionModel.rutas.length > 0) {
        let allParametros = this.composicionModel.rutas
          .map(ruta => {
            return ruta.parametrosEntrada;
          })
          .reduce((count, item) => [...count, ...item]);

        return allParametros;
      }
      return [];
    },
    serviciosSeleccionados() {
      if (this.composicionModel.rutas.length > 0) {
        let servicios = this.composicionModel.rutas.map(
          ruta => ruta.servicio.nombre
        );
        return servicios.filter((item, pos) => servicios.indexOf(item) == pos);
      }
      return [];
    },
    rutasSeleccionadas() {
      if (this.composicionModel.rutas.length > 0) {
        return this.composicionModel.rutas.map(ruta => ruta.ruta.nombre);
      }
      return [];
    }
  },
  components: {
    Parametro
  }
};
</script>

<style scoped>
.gosht-div {
  height: 40px;
}
.search-bar {
  width: 100%;
  min-height: 100%;
  background-color: var(--bg-search);
  padding: 14px;
}
.search-options:not(:last-child) {
  margin-bottom: 12px;
}
.parametros-container {
  padding: 15px 0 0 0;
  display: block;
  width: 100%;
}
.small-list {
  color: #8181c1;
  font-size: 0.9em;
  cursor: pointer;
  line-height: 1.8em;
  display: block;
  margin-right: 5px;
}
.small-list:hover {
  text-decoration: underline;
}
.small-list:not(:last-child)::after {
  content: ", ";
}
.no-result-message {
  font-size: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #717181;
}
</style>
