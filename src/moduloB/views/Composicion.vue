<template>
    <div class="composicion" id="composicion">
        <div class="fake-nav-bar"></div>
        <composicion/>
    </div>
</template>
<script>
import Composicion from '@/moduloB/components/composicion/Composicion'
export default {
    components:{
        Composicion
    }
}
</script>

<style>
.fake-nav-bar{
    width: 100%;
    height: 40px;
    background-color: #600349;
}
#composicion{
    --bg-search:#232033;
    --bg-view:#2c2840;
    --bg-inputs:#1a1826;
    --text-color:#d1d1d1;
    --text-small:#37435c;
    --text-size:.9rem;
    width: 100%;
    height: 100%;
    background-color: var(--bg-view);
    color: var(--text-color);
    font-size: var(--text-size);
}
#composicion .label-text {
    color: var(--text-color);
    font-size: .9em;
    font-weight: 600;
}
#composicion .full-size {
    width: 100%;
}
/* Estilos vuesax */
#composicion .dark-theme .vs-input--input.hasIcon{
    background-color: var(--bg-inputs);
}
#composicion .dark-theme .vs-select--input{
    background-color: var(--bg-inputs);
}
#composicion  .dark-theme .vs-input--placeholder {
    color: #727272;
    top: -1px;
}
#composicion .dark-theme .span-text-validation{
    color:var(--text-small)
}

#composicion hr.separator {
    background-image: -webkit-linear-gradient(to left, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
    background-image: -moz-linear-gradient(to left, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
    background-image: -ms-linear-gradient(to left, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
    background-image: -o-linear-gradient(to left, transparent, rgba(255,255,255,0.1) 20%, rgba(255,255,255,0.1) 80%, transparent);
    background-image: linear-gradient(to left, transparent,rgba(255,255,255,0.1) 20%,rgba(255,255,255,0.1) 80%,transparent);
    background-position: center center;
    background-repeat: no-repeat;
    background-size: 100% 1px;
    border-color: transparent;
    margin: 20px 0;
    display: block;
}
</style>
