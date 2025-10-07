<script setup lang="ts">
const features = ['NuxtHub', 'Nuxt-Auth-Utils', 'Nuxt UI', 'Nuxt Content', 'ESLint', 'Drizzle ORM']
</script>

<template>
  <UContainer>
    <div class="h-screen flex flex-col items-center justify-center">
      <h1 class="text-5xl font-extrabold tracking-tight">
        My Nuxt Starter
      </h1>
      <div class="mt-4 flex items-center gap-2">
        <UBadge
          v-for="feature in features"
          :key="feature"
          :label="feature"
          size="xl"
          variant="subtle"
        />
      </div>
    </div>
  </UContainer>
</template>
