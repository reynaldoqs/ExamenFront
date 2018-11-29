<template>
  <div class="adicionar">
    <div class="content">
      <header>
        <h4>
          Nro. tramite
          <b>{{numTramite}}</b>
        </h4>
      </header>
      <section>
        <q-input
          color="tertiary"
          class="form-input"
          v-model="form.nombre"
          inverted
          float-label="Nombre"
          placeholder="Nombre"
        />
        <q-input
          color="tertiary"
          class="form-input"
          v-model="form.apellido"
          inverted
          float-label="Apellido"
          placeholder="Apellido"
        />
        <q-datetime
          color="tertiary"
          inverted
          class="form-input"
          v-model="form.fechaNac"
          float-label="Fecha de nacimiento"
          type="date"
        />

        <!-- Multiple Line Input -->
        <hr>
        <h3>Datos de la empresa</h3>
        <q-select
          v-model="form.tipo"
          float-label="Tipo de la empresa"
          radio
          :options="tipos"
          inverted
          color="tertiary"
          class="form-input"
        />
        <q-btn color="positive" class="form-input" @click="registrar">Registrar</q-btn>
      </section>
      <footer>
        <span>Fecha de registro</span>
        {{fechaActual}}
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    numTramite: Math.floor(Math.random() * 10000),
    fechaInscripcion: new Date(),
    form: {
      nombre: "",
      apellido: "",
      comentario: "",
      fechaNac: "",
      tipo: ""
    },
    tipos: [
      { label: "Gobierno", value: "GOB" },
      { label: "Comercio", value: "COM" }
    ]
  }),
  methods: {
    registrar() {
      localStorage.setItem(
        `A-${this.numTramite}`,
        JSON.stringify({
          form: this.form,
          fecha: this.fechaActual,
          numTramite: this.numTramite
        })
      );
      alert(`Registro exitoso, número de expediente: A-${this.numTramite}`);
    }
  },
  computed: {
    fechaActual() {
      let dia = this.fechaInscripcion.getDate();
      let mes = this.fechaInscripcion.getMonth();
      let year = this.fechaInscripcion.getFullYear();
      return `${dia}/${mes + 1}/${year}`;
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
