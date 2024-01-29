<script setup lang="ts">
const NAV_LINKS = [
  { href: '/kanban', text: 'Kanban' },
  { href: '/chart1', text: 'Chart 1' },
  { href: '/chart2', text: 'Chart 2' },
];
</script>

<template>
  <section>
    <h1 class="sr-only">The links to kanban board and charts</h1>
    <ul class="flex items-center gap-4">
      <li v-for="link in NAV_LINKS" :key="link.href">
        <NuxtLink
          :to="link.href"
          :class="'text-blue-500 hover:underline text-base sm:text-lg md:text-xl lg:text-2xl'"
        >
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
