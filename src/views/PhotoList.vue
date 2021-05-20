<template>
  <div class="photo-list">
    <h1>Список фотографий</h1>
    <router-link :to="{ name: 'card', params: { id: 42 } }">
      Фотография 42
    </router-link>
    <router-link :to="{ name: 'card', params: { id: 43 } }">
      Фотография 43
    </router-link>
    <router-link :to="{ name: 'card', params: { id: 44 } }">
      Фотография 44
    </router-link>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
