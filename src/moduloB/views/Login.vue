<template>
<div>
    <div class="login-bg"></div>
    <div class="login dark-theme">
        <section>
          
            <img src="../../assets/logo.png" alt="">
            <div class="icons-example">
                <vs-input icon="account_circle" class="dark-input login-input"  placeholder="Usuario" v-model="usuario"/>
                <vs-input icon="lock" class="dark-input login-input"  placeholder="Contraseña" v-model="clave"/>
                <vs-button @click="login" class="dark-button" size="small" type="gradient" color="success" >INGRESAR</vs-button>
               
            </div>
            <a href="#">¿Olvidaste tu contraseña?</a>
            <a href="#">Registrarse</a>
        </section>
        <footer>
            iop
        </footer>
    </div>

</div>
</template>
<script>
export default {
  data() {
    return {
      usuario: "",
      clave: ""
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("login", { usuario: this.usuario, clave: this.clave })
        .then(data => {
          this.$vs.notify({
            title: "Composición guardara",
            text: "la composicion ha sido guardada con exito",
            color: "#28a745",
            icon: "verified_user"
          });
        })
        .catch(err => {
          this.$vs.notify({
            title: "Error en el login",
            text: "normalito",
            color: "danger",
            icon: "error",
            time: 218000
          });
        });
    }
  }
};
</script>
<style>
.dark-button {
  width: 100%;
}
.dark-input {
  text-align: left;
  width: 100%;
}
.login-input {
  margin: 20px 0;
}
.git-btn {
  margin-top: 30px;
}
.login-bg {
  width: 100%;
  height: 100vh;
  background-image: url(../../assets/bg.jpg);
  background-size: cover;
  -webkit-filter: blur(2px);
  filter: blur(7px);
}
.login {
  width: 100%;
  height: 100%;
  background-color: rgba(25, 22, 41, 0.86);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
}
section {
  background-color: var(--bg-content);
  width: 320px;
  margin: 70px 0 0 0;
  text-align: center;
  padding: 60px 25px 25px 25px;
  border-radius: 2px;
  color: silver;
}
img {
  max-width: 180px;
  margin-bottom: 20px;
}

p {
  margin: 80px 0 20px 0;
  font-size: 0.9em;
}
a {
  display: block;
  color: silver;
  font-size: 0.85em;
  margin: 30px 0 10px 0;
}
a:last-child {
  margin-top: 10px;
  margin-bottom: 10px;
}
footer {
  width: 100%;
  background-color: black;
  text-align: center;
  padding: 10px;
  color: var(--iop-secondary);
}
</style>
