<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar color="primary" :glossy="$q.theme === 'mat'" :inverted="$q.theme === 'ios'">
        <q-btn flat dense round @click="leftDrawerOpen = !leftDrawerOpen" aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>Registro de empresas
          <div slot="subtitle">Version 1.0</div>
        </q-toolbar-title>
      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null"
    >
      <q-list no-border link inset-delimiter>
        <q-list-header>Trámites principales</q-list-header>
        <q-item to="adicionar">
          <q-item-side icon="add"/>
          <q-item-main label="Adicionar empresa" sublabel="Formulario de registro de empresas"/>
        </q-item>
        <q-item to="registro">
          <q-item-side icon="eject"/>
          <q-item-main label="Guardar empresa" sublabel="Registro con num de expediente"/>
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view name="general"/>
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data: () => ({
    leftDrawerOpen: true
  })
};
</script>

<style scoped>
.general {
  width: 100%;
  height: 100%;
  display: flex;
  --side-bar-width: 300px;
}
.side-bar {
  width: var(--side-bar-width);
  background-color: #f1f1f1;
  color: #212121;
}
.content {
  width: calc(100% - var(--side-bar-width));
  height: 100%;
}
</style>
