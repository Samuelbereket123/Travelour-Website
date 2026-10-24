<template>
  <div class="travelour-root">
    <NuxtRouteAnnouncer />
    <HeaderNav />
    <main id="main-content">
      <NuxtPage />
    </main>
    <FooterNav />
  </div>
</template>

<script setup lang="ts">
// Global layout setup
</script>

<style scoped>
.travelour-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: var(--color-background);
  color: var(--color-foreground);
}

#main-content {
  flex: 1;
}
</style>
