<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  content: {
    type: string;
    content: any[];
  };
}>();

const emit = defineEmits(['close']);

const formattedContent = computed(() => {
  if (!props.content.content) return [];

  return props.content.content.map((item: any) => {
    switch (props.content.type) {
      case 'submissions':
        return {
          title: 'Submission ID:',
          id: item.frontiersArticleId,
          details: [`Date: ${new Date(item.submissionDate).toLocaleDateString()}`],
        };
      case 'rejections':
        return {
          title: 'Rejection ID:',
          id: item.submissionId,
          details: [
            `Date: ${new Date(item.submissionDate).toLocaleDateString()}`,
            `Reason: ${item.rejectionReason}`,
          ],
        };
      case 'retractions':
        return {
          title: 'Retraction ID:',
          id: item.publicationId,
          details: [
            `Date: ${new Date(item.retractionDate).toLocaleDateString()}`,
            `Types: ${item.retractionTypes.join(', ')}`,
            `Reasons: ${item.retractionReasons.join(', ')}`,
          ],
        };
      default:
        return { title: 'Unknown', id: '', details: [] };
    }
  });
});
</script>

<template>
  <div class="info-popover" @click="emit('close')">
    <div class="popover-content" @click.stop>
      <h3>{{ content.type.charAt(0).toUpperCase() + content.type.slice(1) }} Details</h3>
      <ul>
        <li v-for="(item, index) in formattedContent" :key="index">
          <strong>
            {{ item.title }}
            <a :href="`https://www.frontiersin.org/${item.id}`" target="_blank">
              {{ item.id }}
            </a>
          </strong>
          <ul>
            <li v-for="(detail, detailIndex) in item.details" :key="detailIndex">
              {{ detail }}
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.info-popover {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.popover-content {
  position: relative;
  background-color: white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h3 {
  margin-top: 0;
  color: black;
}

ul {
  padding-left: 20px;
  color: black;
}

a {
  color: #2196f3;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>