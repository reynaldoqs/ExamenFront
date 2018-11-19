<template>
    <div class="parametros-list">
        <parametros-list-item/>
    </div>
</template>
<script>
import ParametrosListItem from './ParametrosListItem'
export default {
    components:{
        ParametrosListItem
    }
}
</script>

<style scoped>
.parametros-list{
    padding: 0 20px;
}
</style>
