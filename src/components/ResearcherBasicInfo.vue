<script setup lang="ts">
import { computed } from 'vue';
import type { Author } from '../types';

const props = defineProps<{
  author: Author;
}>();

const authorDetails = computed(() => {
  const details = [];
  
  if (props.author.order === 1) {
    details.push('First');
  }
  
  // We need to check if this author has the highest order number
  // This requires access to all authors, which we don't have in this component
  // So we'll leave this part commented out for now
  // if (isLastAuthor(props.author)) {
  //   details.push('Last');
  // }
  
  if (props.author.isSubmitting) {
    details.push('Submitting');
  }
  
  if (props.author.isCorresponding) {
    details.push('Corresponding');
  }
  
  return details.length > 0 ? `[${details.join(', ')}]` : '';
});
</script>

<template>
  <div class="researcher-basic-info">
    <h2>
      <a :href="`https://www.frontiersin.org/${author.airaId}`" target="_blank">
        {{ author.fullName }}
      </a>
    </h2>
    <p v-if="authorDetails" class="author-details">{{ authorDetails }}</p>
    <p><span class="text-data">✉️ {{ author.email }}</span></p>
    <p v-for="(affiliation, index) in author.affiliations" :key="index" class="text-data">
      🏛️ {{ affiliation.affiliationName }}, {{ affiliation.country }}
    </p>
  </div>
</template>

<style scoped>
.researcher-basic-info {
  margin-bottom: 0px;
}

h2 {
  margin-top: 0;
  margin-bottom: 0;
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

.author-details {
  font-size: 0.9em;
  color: #666;
  margin-top: 0;
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