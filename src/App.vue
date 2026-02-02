<script setup>
import { ref } from 'vue';

const keyword = ref('');

const search = () => {
  console.log('검색어:', keyword.value);
};

</script>

<template>
  <header>
    <router-link to="/">               
      <strong>Memo Application</strong>
    </router-link>
  </header>

  <main>
    <router-view />
  </main>

  <footer>© 2026 CRUD | Memo Application</footer>

</template>

<style scoped>

</style>
