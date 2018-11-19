import Vue from 'vue'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'


let configuration = {
    theme:{
        colors:{
            primary:'#600349',
            success:'rgb(23, 201, 100)',
            danger:'rgb(242, 19, 93)',
            warning:'rgb(255, 130, 0)',
            dark:'#151616'
        }
    }
}

Vue.use(Vuesax, configuration)