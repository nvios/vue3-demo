<script setup lang="ts">
import { ref } from 'vue';
import type { Author } from '../types';
import ResearcherBasicInfo from './ResearcherBasicInfo.vue';
import ResearcherDetails from './ResearcherDetails.vue';
import InfoPopover from './InfoPopover.vue';

const props = defineProps<{
  author: Author;
}>();

const showPopover = ref(false);
const popoverContent = ref({});

const togglePopover = (content: any) => {
  popoverContent.value = content;
  showPopover.value = !showPopover.value;
};
</script>

<template>
  <div class="researcher-profile">
    <ResearcherBasicInfo :author="author" />
    <ResearcherDetails :author="author" @show-info="togglePopover" />
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
</style>