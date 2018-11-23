<template>
  <div class="avatar">
    <div @click="$emit('onSelect',idPerfil)" class="avatar-img" :style="{backgroundImage:'url('+require('../../../assets/iop-'+urlImagen+'.jpg')+')'}"> 
    </div>
    <div class="avatar-information">
      <div @click="$emit('onSelect',idPerfil)">
        <h3>{{nombre}}</h3>
        <p>{{descripcion}}</p>
      </div>
      <div>
        <div class="avatar-production" :style="{color:esProduccion?'var(--danger-iop)':'var(--green)'}">
          {{esProduccion?'Producción':'Desarrollo'}}
        </div>
        <vs-button class="avatar-btn" size="small" color="#38324e"  icon="delete"></vs-button>
        <vs-button class="avatar-btn" size="small" color="#38324e"  icon="settings"></vs-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    nombre: String,
    urlImagen: String,
    descripcion: String,
    estado: String,
    esProduccion: Boolean,
    idPerfil: String,
    isSelected: Boolean
  }
};
</script>
<style scoped>
.avatar {
  --border-avatar: 4px;
  margin: 18px;
  width: 300px;
  height: 100px;
  background-color: var(--bg-content);
  text-align: center;
  display: flex;
  border-radius: var(--border-avatar);
  padding: 5px;
  cursor: pointer;
}
.avatar-img {
  width: 90px;
  background-color: var(--iop-primary);
  border-radius: var(--border-avatar);
  background-size: cover;
  opacity: 0.1;
  filter: grayscale(100%);
  transition: 0.5s all ease;
}
.avatar-information {
  width: calc(100% - 90px);
  position: relative;
}
.avatar-information h3 {
  font-size: 0.95em;
}
.avatar-information p {
  font-size: 0.84em;
  margin: 5px 0;
  color: var(--app-text-secondary);
}
.avatar-information > div:first-child {
  padding: 10px 40px 10px 15px;
  text-align: left;
  height: 100%;
  width: 100%;
}
.avatar-information > div:last-child {
  position: absolute;
  bottom: -8px;
  right: -18px;
  width: 38px;
}
.avatar-production {
  font-weight: 400;
  font-size: 10px;
  position: absolute;
  top: -45px;
  right: 30px;
  background-color: #38324e;
  padding: 5px 6px;
  border-radius: 5px;
}
.avatar:hover .avatar-btn {
  visibility: visible;
}
.avatar:hover .avatar-img {
  opacity: 0.9;
  filter: grayscale(10%);
}
.avatar-btn {
  margin-top: 6px;
  visibility: hidden;
  transition: 0.3s all ease;
}
</style>
