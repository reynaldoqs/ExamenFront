<template>
  <div class="avatar">
    <div  @click="$emit('onSelect')"  class="image-container" >
      <img :style="{filter:esProduccion?'blur(2px)':'' }" :src="require('../../../assets/iop-'+urlImagen+'.jpg')" alt="">
      <div v-if="esProduccion" class="hover-content">
       <span class="estado">Producción</span>
       <vs-icon class="prod-icon" icon="lock"/>
      </div>
      <div class="options-content" v-if="!esProduccion">
        <div class="options">
           <button @click.stop="$emit('onDelete')" style="position:relative;left:-4px;" type="text" size="mini">Eliminar</button>
           <button @click.stop="$emit('onEdit')" style="position:relative;right:-4px;"  type="text" size="mini">Editar</button>
        </div>
      </div>
    </div>
    <div class="avatar-information">
      <span>{{nombre}}</span>
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
    esProduccion: {
      type: Boolean,
      default: true
    },
    idPerfil: String,
    isSelected: Boolean
  }
};
</script>
<style scoped>
.avatar {
  margin: 12px;
  text-align: center;
  --border-avatar: 4px;
}
.image-container {
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /*   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18); */
  cursor: pointer;
  border-radius: var(--border-avatar);
  background-color: var(--bg-content);
}
.avatar img {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
}
.hover-content {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(5, 15, 44, 0.55);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-avatar);
}
.options {
  display: none;
  position: relative;
  top: -28px;
}
.options-content {
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: var(--border-avatar);
  transition: 0.3s all ease;
}
.avatar:hover .options-content {
  background-color: rgba(25, 25, 25, 0.2);
}
.avatar:hover .options {
  text-align: center;
  display: flex;
  justify-content: space-around;
}
.avatar-information {
  text-align: center;
  padding: 10px 2px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: silver;
  font-size: 0.85em;
  max-width: 90px;
}
.estado {
  font-weight: 900;
  font-size: 8px;
  color: white;
  position: absolute;
  top: -4px;
  right: -5px;
  background-color: var(--danger-iop);
  padding: 3px;
  border-radius: 3px;
}
.prod-icon {
  font-size: 28px;
  color: var(--orange);
}
</style>
