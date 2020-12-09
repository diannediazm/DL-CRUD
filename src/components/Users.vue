<template>
  <div class="container text-left">
    <h1 class="text-center">Creación y edición de usuarios</h1>
    <b-form v-if="show" class="mb-4">
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
        label="Correo electrónico"
        label-for="input-3"
        description="No compartiremos tus datos"
      >
        <b-form-input
          id="input-3"
          v-model="form.email"
          type="email"
          required
          placeholder="Escribe tu correo"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="success" class="mr-2">Ingresar</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
      
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      form: {
        name: '',
        lastname: '',
        email: ''
      },
      show: true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
