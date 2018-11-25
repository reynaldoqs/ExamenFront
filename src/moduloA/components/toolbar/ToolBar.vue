<template>
    <div id="toolbar" class="toolbar">
        <div class="toolbar-container">
            <div class="toolbar-left-options">
                <ul>
                    <li>
                        <div class="img-toolbar">
                            <img src="../../../assets/logo agetic blanco.png" alt=""> 
                        </div>
                    </li>
                </ul>
            </div>
            <div class="toolbar-right-options">
                <ul>
                    <li>
                        <composicion-btn/>
                    </li>
                    <li>
                        <off-btn/>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<script>
import offBtn from './OffButton'
import composicionBtn from './ComposicionButton'
export default {
    components:{
        offBtn,
        composicionBtn
    }
}
</script>

<style scoped>
#toolbar {
    width: 100%;
    height: var(--footer-height);
    background-color: var(--bg-toolbar);
}
.toolbar-container{
    width: 100%;
    height: 100%;
    margin: 0 auto;
    max-width: 1600px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
#toolbar ul{
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
}
#toolbar ul > li {
   display: flex;
   align-items: flex-end;
   margin: 0 5px;
   padding: 0 10px;
}
#toolbar .img-toolbar {
    display: flex;
    align-items: center;
}
#toolbar .img-toolbar >img{
    width: 110px;
}
</style>
