<template>
  <div id="app">
    <header class="header">
      <router-link :to="{ name: 'list' }">Фотолист</router-link>
    </header>
    <router-view />
  </div>
</template>

<style scoped lang="scss"></style>
