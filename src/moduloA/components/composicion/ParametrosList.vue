<template>
    <div class="parametros-list dark-theme">
      <pre>
        {{serviciosFilter}}
        {{query}}
      </pre>
        <h4 v-show="parametros.length > 0">Parámetros registrados: {{parametros.length}}</h4>
        <template v-for="(parametro, index) in parametrosList">
            <parametros-list-item
            :parametro="parametro"
            :key="parametro._id"
            @onSelect="data=>{$emit('onSelect',data)}"
            />
            <hr :key="index" class="separator">
        </template>
    </div>
</template>
<script>
import ParametrosListItem from "./ParametrosListItem";
export default {
  props: {
    parametros: {
      type: Array
    },
    serviciosFilter: {
      type: Array
    },
    query: {
      type: Object
    }
  },
  methods: {
    searchByParametro(anArray, query) {
      console.log("el query", query.query);

      if (query.query) {
        console.log("retormanos la busqueda", query.query);
        return anArray.filter(param => {
          return param.nombre.toLowerCase().includes(query.query.toLowerCase());
        });
      }
      return anArray;
    },
    searchByDescripcion(anArray, query) {
      return [];
    },
    searchByPalabrasClave(anArray, query) {
      return [];
    }
  },
  computed: {
    parametrosList() {
      //hacer un smart filtrador
      if (this.serviciosFilter.length > 0) {
        let parametrosFiltered = this.parametros.filter(parametro => {
          return parametro.idRespuesta.idRuta.idServicio
            ? this.serviciosFilter.includes(
                parametro.idRespuesta.idRuta.idServicio._id
              )
            : false;
        });
        parametrosFiltered = this.searchByParametro(
          parametrosFiltered,
          this.query
        );
        /* parametrosFiltered = this.searchByDescripcion(parametrosFiltered);
        parametrosFiltered = this.searchByPalabrasClave(parametrosFiltered); */
        return parametrosFiltered;
      } else {
        let parametrosAor = this.parametros;
        return parametrosAor.sort((item, next) => {
          return (
            item.nombre.toString().toLowerCase() >
            next.nombre.toString().toLowerCase()
          );
        });
      }
    }
  },
  components: {
    ParametrosListItem
  }
};
</script>

<style scoped>
.parametros-list {
  padding: 0 20px;
  width: 100%;
}
h4 {
  color: #b1b1b1;
  margin: 10px;
  font-weight: 400;
  font-size: 1.1em;
}
</style>
