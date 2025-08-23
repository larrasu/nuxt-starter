<script setup lang="ts">
useHead({
  titleTemplate: title => title ? `${title} | My Nuxt Starter` : 'My Nuxt Starter'
})
</script>

<template>
  <NuxtRouteAnnouncer />
  <UApp>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </UApp>
</template>
