<template>
    <div>
        <h1 class="mb-5">Lista de usuarios</h1>
        <b-table striped hover :items="dataUsers"></b-table>
    </div>
</template>

<script>
export default {
    name: 'ListaUsers',
    computed: {
        dataUsers() {
            return this.$store.getters.mostrarPacientes;
        }
    },
}
</script>