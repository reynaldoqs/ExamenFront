<template>
    <div class="search-bar">
        <vs-input icon="search"
        description-text="Busqueda de parametros"
        icon-after="true"
        size="normal"
        class="dark-theme full-size" 
        placeholder="Buscar..."
        v-model="query"
        @keyup.enter="sendQuery"
        />
        <hr class="separator">
        <vs-row
        class="search-options"
        vs-align="center"
        vs-type="flex" vs-justify="flex-start" vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="5">
                <div class="label-text">
                    Busqueda por:
                </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="7">
                <vs-select
                color="#603AFF"
                class="dark-theme full-size"
                v-model="searchBy"
                    >
                    <vs-select-item v-for="(item,index) in searchOptions" :key="index" :value="item.value" :text="item.text"  />
                </vs-select>
            </vs-col>
        </vs-row>
        <vs-row
        class="search-options"
        vs-align="center"
        vs-type="flex" vs-justify="flex-start" vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="5">
                <div class="label-text">
                    Filtrar servicios:
                </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="7">
                <vs-select
                color="#603AFF"
                class="dark-theme full-size"
                v-model="filterBy"
                multiple
                autocomplete
                max-selected=6
                placeholder="Filtar por servicios"
                    >
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in filterOptions" />
                </vs-select>
            </vs-col>
        </vs-row>

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
    ],
    filterOptions: [
      { text: "Ruex", value: 1 },
      { text: "Senavex", value: 2 },
      { text: "Fundempresa", value: 3 },
      { text: "Fondo de desarrollo rural", value: 4 },
      { text: "Triangle", value: 5 },
      { text: "Polygon", value: 6 },
      { text: "Regular polygon", value: 7 },
      { text: "Circumference", value: 8 },
      { text: "Circle", value: 9 },
      { text: "Circular sector", value: 10 },
      { text: "Circular trapeze", value: 11 }
    ]
  }),
  props: {
    composicionModel: Object
  },
  methods: {
    sendQuery() {
      if (this.query && this.query !== "") {
        this.$emit("onQuery", {
          query: this.query,
          searchBy: this.searchBy,
          filterBy: this.filterBy
        });
        return;
      }
      console.warn("empty");
    }
  },
  computed: {
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
        return this.composicionModel.rutas
          .map(ruta => {
            return ruta.parametrosEntrada;
          })
          .reduce((count, item) => [...count, ...item]);
      }
      return [];
    },
    serviciosSeleccionados() {
      if (this.composicionModel.rutas.length > 0) {
        let servicios = this.composicionModel.rutas.map(ruta => ruta.servicio);
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
