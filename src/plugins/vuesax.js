import Vue from 'vue'
import Vuesax from 'vuesax'
import 'material-icons/iconfont/material-icons.css';
import 'vuesax/dist/vuesax.css'


let configuration = {
    theme: {
        colors: {
            primary: '#ed6d64',
            success: 'rgb(23, 201, 100)',
            danger: '#ff4f81',
            warning: '#fd7e14',
            dark: '#050f2c'
        }
    }
}

Vue.use(Vuesax, configuration)