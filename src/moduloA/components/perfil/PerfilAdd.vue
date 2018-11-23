<template>
  <div class="avatar">
    <div @click="$emit('onAdd')" class="square-container">
     <vs-icon class="iop-icon" icon="add"/>
    </div>
    <div class="avatar-information">
      <span>Agregar</span>
    </div>
  </div>
</template>
<style scoped>
.avatar {
  margin: 15px;
  text-align: center;
}
.square-container {
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: dashed 1px var(--text-small);
  cursor: pointer;
  border-radius: 6px;
}
.iop-icon {
  font-size: 40px;
  color: var(--text-small);
}
.avatar-information {
  text-align: center;
  padding: 8px 2px 1px 2px;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 0.9em;
  color: var(--txt-color);
}
</style>
