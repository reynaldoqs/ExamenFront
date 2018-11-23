<template>
    <div :class="[paramClass(ubicacion),'parametro']" :style="{backgroundColor:tipo === 'respuesta'?'#17C964':''}">
        <div class="container">
            <div>
                {{nombre}}
            </div>
            <div>
                <div @click.stop="$emit('onDelete')" v-show="tipo === 'respuesta'" class="icon-container">
                    <vs-icon v-show="tipo === 'respuesta'" class="iop-icon" icon="delete"></vs-icon>
                </div>
                <div v-show="tipo === 'entrada'" class="char-container">
                    <span class="ubicacion">{{ubicacion.charAt(0)||'b'}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    tipo: String,
    nombre: String,
    ubicacion: String
  },
  methods: {
    paramClass(ubicacion) {
      switch (ubicacion.toLowerCase()) {
        case "path":
          return "param";
        case "query":
          return "query";
        case "header":
          return "header";
        case "body":
          return "body";
        default:
          return "header";
      }
    }
  }
};
</script>
<style scoped>
.parametro {
  opacity: 0.85;
  margin: 3px 3px;
  display: inline-block;
  width: auto;
  padding: 2px 4px 2px 10px;
  border-radius: 15px;
}

.container {
  color: white;
  font-size: 11.6px;
  display: flex;
}
.container > div:first-child {
  display: flex;
  align-items: center;
}
.ubicacion {
  color: white;
  font-weight: 700;
  font-size: 9px;
  text-transform: uppercase;
}
.icon-container {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.2);
  margin-left: 3px;
  cursor: pointer;
}
.char-container {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(100, 50, 0, 0.3);
  margin-left: 3px;
}
.icon-container:hover {
  background-color: var(--red);
}
.iop-icon {
  font-size: 14px;
}
.header {
  background-color: var(--orange);
}
.body {
  background-color: var(--red);
}
.query {
  background-color: var(--purple);
}
.param {
  background-color: var(--indigo);
}
</style>
