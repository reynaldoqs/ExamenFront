<template>
    <div class="parametro-item">
        <div>
            <vs-button @click="$emit('onSelect', parametro)" radius color="success" type="border" size="small" icon="add"></vs-button>
        </div>
       <div class="parametros-information">
            <div>
                <h3>{{parametro.nombre}} </h3><span class="parametro-tipo">{{parametro.tipo}}</span>
                <p>{{parametro.descripcion}}</p>
            </div>
            <div>
                <div class="extra-inf">
                    ruta: {{parametro.idRespuesta.idRuta.nombre}}  |  método: {{parametro.idRespuesta.idRuta.metodo}}  |  código:{{parametro.idRespuesta.codigoHttp}} 
                </div>
            </div>
            <div>
                <vs-icon class="parametros-icon" icon="local_offer"></vs-icon>
                <parametro
                v-for="parametroEntrada in parametro.parametrosEntrada"
                :key="parametroEntrada._id"
                :nombre="parametroEntrada.nombre"
                :ubicacion="parametroEntrada.ubicacion"
                :requerido="parametroEntrada.requerido"
                />
                <div v-show="parametro.parametrosEntrada.length === 0" class="no-result">
                    Sin parámetros de entrada
                </div>
            </div>
       </div>
    </div>
</template>
<script>
import Parametro from "./ParametrosListItemEntrada";
export default {
  props: {
    parametro: {
      type: Object
    }
  },
  components: {
    Parametro
  }
};
</script>
<style scoped>
h3 {
  color: var(--text-color);
  font-size: 1.4em;
  font-weight: 400;
  line-height: 1.4em;
  display: inline-block;
}
p {
  color: #a1a1a1;
  font-size: 1em;
  line-height: 1.4em;
  font-weight: 400;
}
.parametro-tipo {
  color: #717171;
  font-family: "Courier New", Courier, monospace;
  font-size: 10px;
  margin-left: 10px;
}
.parametro-tipo::after {
  content: ">";
  font-size: 16px;
  position: relative;
  top: 2px;
}
.parametro-tipo::before {
  content: "<";
  font-size: 16px;
  position: relative;
  top: 2px;
}
.extra-inf {
  color: #717171;
  margin: 2px 0 14px 0;
  font-size: 12px;
}
.parametro-item {
  display: flex;
}
.parametro-item > div:first-child {
  padding: 5px 10px;
}
.parametro-information {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.parametros-icon {
  font-size: 14px;
  position: relative;
  top: 3px;
  margin-right: 6px;
}
.no-result {
  display: inline;
  color: #616161;
  font-size: 12px;
}
</style>
