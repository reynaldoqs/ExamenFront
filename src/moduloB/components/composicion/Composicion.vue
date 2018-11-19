<template>
    <div class="composicion-container">
       <div class="composicion-list">
        <div class="left">
            <search-bar/>
        </div>
        <div class="right">
            <parametros-list/>
        </div>
       </div>
    </div>
</template>
<script>
import SearchBar from './SearchBar'
import ParametrosList from './ParametrosList'
export default {
    components:{
        SearchBar,
        ParametrosList
    }
}
</script>

<style scoped>
.composicion-list{
    display: flex;
}
.left{
    width: 500px;
}
</style>
