<template>
  <div>
    <tool-bar/>
  </div>
</template>
<script>
import ToolBar from '@/moduloA/components/toolbar/ToolBar'
export default {
  components:{
    ToolBar
  }
}
</script>
<style scoped>
div{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end
}
</style>
