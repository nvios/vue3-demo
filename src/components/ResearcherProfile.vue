<script setup lang="ts">
import { ref } from 'vue';
import type { Author } from '../types';
import ResearcherBasicInfo from './ResearcherBasicInfo.vue';
import ResearcherMainDetails from './ResearcherMainDetails.vue';
import ResearcherAllDetails from './ResearcherAllDetails.vue';
import InfoPopover from './InfoPopover.vue';

const props = defineProps<{
  author: Author;
}>();

const showPopover = ref(false);
const popoverContent = ref({});
const showAllDetails = ref(false);

const togglePopover = (content: any) => {
  popoverContent.value = content;
  showPopover.value = !showPopover.value;
};

const toggleAllDetails = () => {
  showAllDetails.value = !showAllDetails.value;
};
</script>

<template>
  <div class="researcher-profile">
    <div class="researcher-info-container">
      <ResearcherBasicInfo :author="author" />
      <ResearcherMainDetails :author="author" @show-info="togglePopover" />
    </div>
    <div class="more-details">
      <button @click="toggleAllDetails" class="toggle-details">
        {{ showAllDetails ? '▼ Less details' : '▶ More details' }}
      </button>
      <ResearcherAllDetails v-if="showAllDetails" :author="author" @show-info="togglePopover" />
    </div>
    <InfoPopover v-if="showPopover" :content="popoverContent" @close="showPopover = false" />
  </div>
</template>

<style scoped>
.researcher-profile {
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 16px;
  background-color: #f9f9f9;
  text-align: left;
  width: 100%;
  box-sizing: border-box;
}

.researcher-info-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0px;
}

.researcher-info-container > * {
  flex: 1;
}

.more-details {
  margin-top: 20px;
}

.toggle-details {
  background: none;
  border: none;
  color: #2196f3;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
  text-align: left;
}

.toggle-details:hover {
  text-decoration: underline;
}
</style>