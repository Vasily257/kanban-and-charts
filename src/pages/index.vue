<script setup lang="ts">
const NAV_LINKS = [
  { href: '/kanban', text: 'The Kanban board' },
  { href: '/histogram', text: 'The histogram' },
  { href: '/dot-graph', text: 'The dot graph' },
];
</script>

<template>
  <section>
    <h1 class="sr-only">The links to kanban board and charts</h1>
    <ul class="flex flex-col items-center gap-y-4">
      <li v-for="link in NAV_LINKS" :key="link.href">
        <NuxtLink :to="link.href" class="text-xl text-blue-500 hover:underline lg:text-2xl">
          {{ link.text }}
        </NuxtLink>
      </li>
    </ul>
  </section>
</template>
