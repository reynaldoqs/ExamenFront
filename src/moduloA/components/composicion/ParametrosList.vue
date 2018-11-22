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

        return parametrosFiltered;
      }
      //ordenado por nombre
      let parametrosAor = this.parametros;
      return parametrosAor.sort((item, next) => {
        return (
          item.nombre.toString().toLowerCase() >
          next.nombre.toString().toLowerCase()
        );
      });
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
