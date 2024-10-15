<script setup lang="ts">
import type { Author } from '../types';

defineProps<{
  author: Author;
}>();
</script>

<template>
  <div class="researcher-basic-info">
    <h2> <a :href="`https://www.frontiersin.org/${author.airaId}`" target="_blank">
              {{ author.fullName }}
            </a></h2>
    <p><span class="text-data">✉️ {{ author.email }}</span></p>
    <p v-for="(affiliation, index) in author.affiliations" :key="index" class="text-data">
      🏛️ {{ affiliation.affiliationName }}, {{ affiliation.country }}
    </p>
  </div>
</template>

<style scoped>
.researcher-basic-info {
  margin-bottom: 20px;
}

h2 {
  margin-top: 0;
  color: #333;
}

a {
  color: #2196f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

p {
  margin: 8px 0;
}

strong {
  color: #555;
}

ul {
  margin: 0;
  padding-left: 20px;
}

.text-data {
  color: #333;
}
</style>