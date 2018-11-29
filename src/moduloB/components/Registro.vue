<template>
  <div class="adicionar">
    <div class="content">
      <header>
        <h4>
          ingrese su
          <b>número de expediente</b>
        </h4>
      </header>
      <section>
        <div class="row">
          <q-input
            color="tertiary"
            class="form-input col-8"
            v-model="expediente"
            inverted
            float-label="Expediente"
            placeholder="Expediente"
          />
          <hr>
          <q-btn
            style="height:58px"
            color="positive"
            class="form-input col-3"
            @click="cargarDatos"
          >Cargar datos</q-btn>
        </div>
        <h3>Datos de la empresa</h3>
        <div class="informacion">
          <div>Trámite: {{datosGuardados.numTramite? datosGuardados.numTramite:''}}</div>
          <div>Nombre: {{datosGuardados.form? datosGuardados.form.nombre:''}}</div>
          <div>Apellido: {{datosGuardados.form? datosGuardados.form.apellido:''}}</div>
          <div>Fecha registro: {{datosGuardados.form? datosGuardados.fecha:''}} tipo:{{datosGuardados.form? datosGuardados.form.tipo:''}}</div>
        </div>

        <q-input
          v-model="comentario"
          inverted
          color="tertiary"
          type="textarea"
          float-label="Comerntario"
          :max-height="100"
          rows="3"
        />
      </section>
      <footer>
        <q-btn @click="guardarEmpresa" color="positive">Guardar empresa</q-btn>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    comentario: "",
    expediente: "",
    datos: ""
  }),
  methods: {
    cargarDatos() {
      let key = this.expediente || "";
      let datos = localStorage.getItem(key);
      this.datos = JSON.parse(datos);
    },
    guardarEmpresa() {
      if (this.datos === "") {
        alert(
          "debe cargar los datos con el número de expendiente de la opcion adicionar empresa"
        );
        return;
      }
      this.datos = "";
      this.expediente = "";
      alert("Datos guardados con exito");
    }
  },
  computed: {
    datosGuardados() {
      return this.datos;
    }
  }
};
</script>

<style scoped>
.adicionar {
  width: 100%;
  height: 100%;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content {
  background-color: #d3d3d3;
  width: 500px;
  max-width: 100%;
  padding: 5px;
  display: flex;
  flex-direction: column;
}
h3 {
  line-height: 1.2rem;
  font-size: 1.2rem;
  color: #414141;
}
h4 {
  font-size: 1.1rem;
  line-height: 1.1rem;
}
header {
  padding: 5px;
}
section {
  padding: 10px;
}
.form-input:not(:last-child) {
  margin-bottom: 10px;
}
</style>
