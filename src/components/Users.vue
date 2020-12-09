<template>
  <div class="container text-left">
    <h1 class="text-center mb-5">Creación y edición de usuarios</h1>
    <b-form v-if="show" class="mb-5" @submit.prevent="agregar">
       <b-form-group id="input-group-1" label="Nombre" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.name"
          required
          placeholder="Escribe tu nombre"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label="Apellido" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.lastname"
          required
          placeholder="Escribe tu apellido"
        ></b-form-input>
      </b-form-group>
      
      <b-form-group
        id="input-group-3"
        label="Email"
        label-for="input-3"
        description="No compartiremos tus datos"
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Escribe tu correo electrónico"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success" class="mr-2">Agregar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      
  </div>
</template>

<script>
export default {
  name: 'Users',
  data() {
    return {
      form: {
        name: '',
        lastname: '',
        email: ''
      },
      show: true
    }
  },
  methods: {
    agregar() {
      if (this.form.name && this.form.lastname && this.form.email){
        this.$store.dispatch('agregandoPacientes', this.form)
      } else {
        console.log('no carga');
      }
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
