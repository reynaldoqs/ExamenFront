<template>
  <div @click="logout" class="iop-off-btn">
    <vs-icon class="iop-icon" icon="power_settings_new" />
  </div>
</template>
<script>
export default {
  name: 'logout-btn',
  methods: {
    logout () {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style scoped>
.iop-off-btn {
  cursor: pointer;
  padding: 5px;
}
.iop-icon {
  color: var(--danger-iop);
  transition: 0.4s all ease;
  opacity: 0.5;
  font-size: 26px;
}
.iop-off-btn:hover .iop-icon {
  opacity: 1;
  color: var(--red);
}
</style>