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
      db.collection("pacientes").onSnapshot(respuesta => {
        let arreglo = [];
        respuesta.forEach(element => {
          arreglo.push({
            name: element.data().name,
            lastname: element.data().lastname,
            email: element.data().email,
            id: element.id
          }) 
        });
        commit('mutarPacientes', arreglo);
      });
    },
    agregandoPacientes(context,data){
      db.collection("pacientes").add({
        name: data.name,
        lastname: data.lastname,
        email: data.email
      }).then(resp => {
        console.log(resp);
      })
    },
    eliminarPaciente(context, id) {
      db.collection("pacientes").doc(id).delete().then(() => {
        console.log('Paciente eliminado');
      }).catch (error => {
        console.log(error);
      })
    }
  },
  
})

