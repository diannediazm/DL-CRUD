import Vue from 'vue'
import Vuex from 'vuex'
import { db } from '../main';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pacientes: [],
  },
  getters: {
    mostrarPacientes(state) {
      return state.pacientes;
    }
  },
  mutations: {
    mutarPacientes(state, arreglo) {
      state.pacientes = arreglo;
    }
  },
  actions: {
    traerData({commit}) {
      db.collection("pacientes").get().then(respuesta => {
        let arreglo = [];
        respuesta.forEach(element => {
          arreglo.push({
            nombre: element.data().name,
            apellido: element.data().lastname,
            email: element.data().email,
            id: element.id
          }) 
        });
        commit('mutarPacientes', arreglo);
      });
    },
    agregandoPacientes(context,data){
      db.collection("pacientes").add({
        nombre: data.name,
        apellido: data.lastname,
        email: data.email
      }).then(resp => {
        console.log(resp);
      })
    }
  },
  
})

