<script setup>
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
header {
  padding: 20px;
  border-bottom: 1px solid #eaeaea;
  text-align: center;
}

header a {
  text-decoration: none;
  color: #222;
  font-size: 20px;
}

main {
  max-width: 900px;
  margin: 40px auto;
  padding: 0 20px;
}

footer {
  margin-top: 60px;
  padding: 20px 0;
  text-align: center;
  font-size: 13px;
  color: #999;
  border-top: 1px solid #eaeaea;
}
</style>
