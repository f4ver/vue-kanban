<template>
<div class="logged">
  <div class="logged-in">You are now logged in {{ $nuxt.$fire.auth.currentUser.email }}</div>
  <button v-on:click = "$router.push('/auth/signout')">Logout</button>
    </div>

</template>
<style>
@import url('https://fonts.googleapis.com/css2?family=Kanit:wght@200&display=swap');
.logged {
  width: 100%;
}
.logged-in {
  display: inline-flex;
  font-size: 30px;
  font-family: 'Kanit', sans-serif;
}
.drag-zone {
  height: 300px;
}
#example-1 {
  height: 300px;
}
</style>
<script>
</script>
