<template>
    <div class="composicion-container">
       <div class="composicion-list">
        <div class="left">
            <search-bar/>
        </div>
        <div class="right">
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
    parametros: []
  }),
  methods: {
    selectParametro(parametro) {
      alert(parametro);
    }
  },
  mounted() {
    composicionApi.parametros().then(data => {
      this.parametros = data.data;
      console.log(data);
    });
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
  --left-width: 460px;
}
.left {
  width: var(--left-width);
}
.right {
  width: calc(100% - var(--left-width));
  max-height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
}
</style>
