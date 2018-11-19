<template>
    <div class="search-bar">
        <vs-input icon="search"
        description-text="Busqueda de parametros"
        icon-after="true"
        size="normal"
        class="dark-theme full-size" 
        placeholder="Buscar..."
        v-model="value1"/>
        <hr class="separator">
        <vs-row
        class="search-options"
        vs-align="center"
        vs-type="flex" vs-justify="flex-start" vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="5">
                <div class="label-text">
                    Busqueda por:
                </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="7">
                <vs-select
                color="#603AFF"
                class="dark-theme full-size"
                v-model="select2"
                    >
                    <vs-select-item v-for="(item,index) in options2" :key="index" :value="item.value" :text="item.text"  />
                </vs-select>
            </vs-col>
        </vs-row>
        <vs-row
        class="search-options"
        vs-align="center"
        vs-type="flex" vs-justify="flex-start" vs-w="12">
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="5">
                <div class="label-text">
                    Filtrar servicios:
                </div>
            </vs-col>
            <vs-col vs-type="flex" vs-justify="flex-start" vs-align="center" vs-w="7">
                <vs-select
                color="#603AFF"
                class="dark-theme full-size"
                v-model="select3"
                icon="cloud"
                multiple
                autocomplete
                max-selected=6
                placeholder="Filtar por servicios"
                    >
                    <vs-select-item :key="index" :value="item.value" :text="item.text" v-for="(item,index) in options3" />
                </vs-select>
            </vs-col>
        </vs-row>

        <hr class="separator">
        <div class="label-text">
            Parametros de Salida
        </div>
        <div class="parametros-container">
            <parametro  v-for="(chip,index) in chips" :key="index" :nombre="chip" tipo="respuesta" ubicacion="header"/> 
            <parametro  nombre="Authorizacion" tipo="respuesta" ubicacion="query"/>  
            <parametro  nombre="CodigoAresa" tipo="respuesta" ubicacion="patha"/>  
            <parametro  nombre="Nitrsato" tipo="respuesta" ubicacion="body"/>  
        </div> 
        <hr class="separator">
        <div class="label-text">
            Parametros de entrada
        </div>
        <div class="parametros-container">
            <parametro  v-for="(chip,index) in chips" :key="index" :nombre="chip" tipo="entrada" ubicacion="header"/> 
            <parametro  nombre="Authorizacion" tipo="entrada" ubicacion="query"/>  
            <parametro  nombre="CodigoAresa" tipo="entrada" ubicacion="patha"/>  
            <parametro  nombre="Nitrsato" tipo="entrada" ubicacion="body"/>  
        </div>
        <hr class="separator">
        <div class="label-text">
            Servicios
        </div>
        <div class="parametros-container">
            <span
            v-for="(servicio, index) in servicios"
            :key="index"
            class="small-list">
            {{servicio}}</span>
        </div>
        <hr class="separator">
        <div class="label-text">
            Servicios
        </div>
        <div class="no-result-message">
            No tiene servicios registrados
        </div>
    </div>
</template>
<script>
import Parametro from './Parametro'
export default {
    data:()=>({
        value1:"",
        select2:1,
        select3:[],
        options2:[
            {text: 'Parametro', value: 1},
            {text: 'Descripcion', value: 2},
            {text: 'Palabras Clave', value: 3},
        ],
        options3:[ 
        {text: 'Ruex', value: 1},
        {text: 'Senavex', value: 2},
        {text: 'Fundempresa', value: 3},
        {text: 'Fondo de desarrollo rural', value: 4},
        {text: 'Triangle', value: 5},
        {text: 'Polygon', value: 6},
        {text: 'Regular polygon', value: 7},
        {text: 'Circumference', value: 8},
        {text: 'Circle', value: 9},
        {text: 'Circular sector', value: 10},
        {text: 'Circular trapeze', value: 11},
        ],
        chips:[
        "Vuejs",
        "Node",
        "Vuesax",
        "Angular",
        "Fundation",
        "Flutter"
        ],
        servicios:[
            "Servicio de indentificacion",
            "Servicio de desarrollo rural",
            "Servicio de impuestos",
            "Registro unico de exportadores",
            "Servicio de Fundempresa"
        ]
    }),
    components:{
        Parametro
    },
    methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    }
  }
}
</script>

<style scoped>
.search-bar{
    width: 100%;
    height: 100%;
    background-color: var(--bg-search);
    padding: 14px;
}
.search-options:not(:last-child){
    margin-bottom: 12px;
}
.parametros-container{
    padding: 15px 0 0 0;
    display: block;
    width: 100%;
}
.small-list{
    color: #8181c1;
    font-size: .9em;
    cursor: pointer;
    line-height: 1.8em;
    display: block; 
    margin-right: 5px;
}
.small-list:hover{
    text-decoration: underline;
}
.small-list:not(:last-child)::after{
    content: ", "
}
.no-result-message{
    font-size: 10px;
    margin-top:10px;
    margin-bottom: 10px;
    color: #717181;
}
</style>
