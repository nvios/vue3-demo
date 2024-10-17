<script setup lang="ts">
import { computed } from 'vue';
import type { Author } from '../types';

const props = defineProps<{
  author: Author;
}>();

const emit = defineEmits(['show-info']);

const getBadgeColor = (value: number, thresholds: [number, number]) => {
  if (value < thresholds[0]) return 'red';
  if (value < thresholds[1]) return 'orange';
  return 'green';
};

const showInfo = (type: string) => {
  let content;
  switch (type) {
    case 'submissions':
      content = props.author.submissionRecord;
      break;
    case 'rejections':
      content = props.author.rejectionRecord;
      break;
    case 'retractions':
      content = props.author.retractionRecord;
      break;
  }
  emit('show-info', { type, content });
};
</script>

<template>
  <div class="researcher-main-details">
    <div class="details-grid">
      <p>
        <strong>Submissions:</strong>
        <span class="badge" :class="getBadgeColor(author.submissionRecord.length, [1, 3])">{{ author.submissionRecord.length }}</span>
        <span class="info-icon" @click.stop="showInfo('submissions')" title="Submission Record">ⓘ</span>
      </p>
      <p>
        <strong>Rejections:</strong>
        <span class="badge" :class="getBadgeColor(author.rejectionRecord.length, [1, 3])">{{ author.rejectionRecord.length }}</span>
        <span class="info-icon" @click.stop="showInfo('rejections')" title="Rejection Record">ⓘ</span>
      </p>
      <p>
        <strong>Retractions:</strong>
        <span class="badge" :class="getBadgeColor(author.retractedPublicationCount, [1, 2])">{{ author.retractedPublicationCount }}</span>
        <span v-if="author.retractionRecord.length > 0" class="info-icon" @click.stop="showInfo('retractions')" title="Retraction Record">ⓘ</span>
      </p>
    </div>
  </div>
</template>

<style scoped>
.researcher-main-details {
  padding-left: 20px;
}

.details-grid {
  display: grid;
  gap: 8px;
}

p {
  margin: 4px 0;
}

strong {
  color: #555;
}

.badge {
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  color: white;
  font-weight: bold;
  margin-left: 5px;
}

.red { background-color: #ff4d4d; }
.orange { background-color: #ffa500; }
.green { background-color: #4caf50; }

.info-icon {
  cursor: pointer;
  margin-left: 5px;
  font-size: 14px;
  color: #2196f3;
}

.info-icon:hover {
  color: #0d47a1;
}
</style>