<template>
    <div class="composicion-btn">
        <vs-dropdown class="toolbar-drop" >
        <a class="a-icon" href.prevent>
            <span class="a-text">
                Composicion
            </span>
            <i class="toolbar-icon material-icons">
            widgets
            </i>
        </a>
        <vs-dropdown-menu>
            <vs-dropdown-item>
                <span class="d-option">
                    Composiciones
                </span>
            </vs-dropdown-item>
            <vs-dropdown-item>
                <span class="d-option">
                    Componer
                </span>
            </vs-dropdown-item>
        </vs-dropdown-menu>
        </vs-dropdown>
    </div>
</template>
<style scoped>
.composicion-btn{
  display: flex;
  align-items: center;
  justify-content: center;
}
.d-option{
    font-size: .85em;
    color: var(--iop-secondary);
    text-align: right;
    width: 100%;
    display: block;
    margin: 4px 0 4px 0;
}
.a-icon{
    outline: none;
    text-decoration: none !important;
    display: flex;
    align-items: center;
    justify-content: center;
}
.a-text{
    margin-right: 10px;
    color: var(--iop-secondary);
  font-weight: 600;
  font-size: 12.8px;
}
.toolbar-icon {
    font-size: 18px;
    color: var(--iop-secondary);
}
.toolbar-drop{
    position: relative;
    top: -12px;
}
</style>
