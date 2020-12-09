<template>
  <div>
    <Users />
    <ListaUsers />
  </div>
</template>

<script>
// @ is an alias to /src
import Users from '@/components/Users.vue';
import ListaUsers from '@/components/ListaUsers.vue';

export default {
  name: 'Home',
  components: {
    Users,
    ListaUsers,
  }
}
</script>
