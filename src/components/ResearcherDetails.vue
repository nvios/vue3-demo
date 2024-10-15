<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Author } from '../types';
import InfoPopover from './InfoPopover.vue';

const props = defineProps<{
  author: Author;
}>();

const showPopover = ref(false);
const popoverContent = ref({});

const experienceLevel = computed(() => {
  const publicationCount = props.author.publicationCount;
  if (publicationCount < 10) return { level: 'Early Career', color: 'blue' };
  if (publicationCount < 50) return { level: 'Mid-Career', color: 'green' };
  return { level: 'Senior Researcher', color: 'purple' };
});

const riskLevel = computed(() => {
  const rejectionCount = props.author.rejectionRecord.length;
  const retractionCount = props.author.retractedPublicationCount;
  
  if (retractionCount > 0) return { level: 'High Risk', color: 'red' };
  if (rejectionCount > 2) return { level: 'Medium Risk', color: 'orange' };
  return { level: 'Low Risk', color: 'green' };
});

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
  popoverContent.value = { type, content };
  showPopover.value = true;
};
</script>

<template>
  <div class="researcher-details">
    <div class="profile-grid">
      <div class="profile-column">
        <p>
          <strong>H-index:</strong>
          <span class="badge" :class="getBadgeColor(author.hIndex, [10, 20])">{{ author.hIndex }}</span>
        </p>
        <p>
          <strong>H5-index:</strong>
          <span class="badge" :class="getBadgeColor(author.h5Index, [5, 15])">{{ author.h5Index }}</span>
        </p>
        <p>
          <strong>Publications:</strong>
          <span class="badge" :class="getBadgeColor(author.publicationCount, [10, 50])">{{ author.publicationCount }}</span>
        </p>
        <p>
          <strong>Publications (Last Year):</strong>
          <span class="badge" :class="getBadgeColor(author.publicationCount1Y, [2, 5])">{{ author.publicationCount1Y }}</span>
        </p>
      </div>
      <div class="profile-column">
        <p>
          <strong>Citations:</strong>
          <span class="badge" :class="getBadgeColor(author.citationCount, [50, 200])">{{ author.citationCount }}</span>
        </p>
        <p>
          <strong>Self-Citation Rate:</strong>
          <span class="badge" :class="getBadgeColor(author.selfCitationRate, [0.2, 0.4])">{{ (author.selfCitationRate * 100).toFixed(2) }}%</span>
        </p>
        <p>
          <strong>Experience Level:</strong>
          <span class="badge" :class="experienceLevel.color">{{ experienceLevel.level }}</span>
        </p>
        <p>
          <strong>Risk Level:</strong>
          <span class="badge" :class="riskLevel.color">{{ riskLevel.level }}</span>
        </p>
      </div>
      <div class="profile-column">
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
    <InfoPopover v-if="showPopover" :content="popoverContent" @close="showPopover = false" />
  </div>
</template>

<style scoped>
.profile-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

.profile-column {
  display: flex;
  flex-direction: column;
}

p {
  margin: 8px 0;
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
.blue { background-color: #2196f3; }
.purple { background-color: #9c27b0; }

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