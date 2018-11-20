<template>
    <div class="parametros-list">
        <h4 v-show="parametros.length > 0">Parámetros registrados: {{parametros.length}}</h4>
        <template v-for="(parametro, index) in parametros">
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
</style>
