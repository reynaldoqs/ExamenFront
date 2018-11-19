<template>
    <div :class="[paramClass(ubicacion),'parametro']">
        <div class="container">
            <div>
                {{nombre}}
            </div>
            <div v-show="requerido" class="requerido">
              Req
            </div>
        </div>
    </div>
</template>
<script>
export default {
  props: {
    nombre: String,
    ubicacion: String,
    requerido: Boolean
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
  background-color: var(--bg-search);
  margin: 4px 6px;
  display: inline-block;
  width: auto;
  padding: 5px 8px;
  border-radius: 4px;
}

.container {
  color: #a1a1a1;
  font-size: 11.6px;
  position: relative;
}
.container > div:first-child {
  display: flex;
  align-items: center;
  font-size: 1em;
}
.requerido {
  position: absolute;
  background-color: var(--red);
  color: white;
  font-size: 8px;
  padding: 2px 4px;
  border-radius: 5px;
  top: -14px;
  left: -12px;
}
.iop-icon {
  font-size: 14px;
}
.header {
  color: var(--orange);
}
.body {
  color: var(--red);
}
.query {
  color: var(--indigo);
}
.param {
  color: var(--purple);
}
@media (max-width: 700px) {
  .requerido {
    display: none;
  }
  .parametro {
    margin: 2px 4px;
  }
}
</style>
