<script setup lang="ts">
import { ref } from 'vue';
import ResearcherProfile from './components/ResearcherProfile.vue';
import type { ResearcherData } from './types';

const researcherData = ref<ResearcherData>({
  spaceId: '956',
  jobUid: '878cc9b8-4567-4537-b1f0-5a86e0d75dfb',
  articleId: 98765,
  submissionDate: '2024-10-07T00:00:00Z',
  authors: [
    {
      loopId: 1,
      subAuthorId: 23,
      identificationStep: 'EmailMatchingStep',
      airaId: 123456789,
      firstName: 'John',
      middleName: 'A.',
      lastName: 'Doe',
      fullName: 'John A. Doe',
      isSubmitting: true,
      isCorresponding: false,
      order: 1,
      email: 'john.doe@example.com',
      affiliations: [
        {
          affiliationName: 'University of UAE',
          country: 'USA',
        },
      ],
      hIndex: 15,
      h5Index: 10,
      publicationCount: 20,
      publicationCount1Y: 5,
      lowConfidencePublicationCount: 2,
      citationCount: 200,
      selfCitationRate: 0.1,
      submissionRecord: [
        {
          frontiersArticleId: 2222,
          submissionDate: '2024-07-15T00:00:00Z',
        },
        {
          frontiersArticleId: 2223,
          submissionDate: '2024-07-19T00:00:00Z',
        },
      ],
      rejectionRecord: [
        {
          submissionId: 1111,
          frontiersArticleId: 2222,
          submissionDate: '2024-07-15T00:00:00Z',
          submissionOrder: 1,
          isRejected: 1,
          rejectionReason: 'Plagiarism',
        },
      ],
      retractedPublicationCount: 1,
      retractionRecord: [
        {
          publicationId: 3333,
          retractionDate: '2023-10-01T00:00:00Z',
          originalDoi: '10.1234/example-doi',
          retractionDoi: '10.5678/retraction-doi',
          retractionTypes: ['Fraud', 'Plagiarism'],
          retractionReasons: ['Data fabrication', 'Plagiarism detected'],
          isCorrespondingAuthor: false,
          publisherId: 4444,
          publisherName: 'Frontiers',
        },
      ],
    },
    {
      loopId: 2,
      subAuthorId: 24,
      identificationStep: 'EmailMatchingStep',
      airaId: 987654321,
      firstName: 'Jane',
      middleName: 'B.',
      lastName: 'Smith',
      fullName: 'Jane B. Smith',
      isSubmitting: false,
      isCorresponding: true,
      order: 2,
      email: 'jane.smith@example.com',
      affiliations: [
        {
          affiliationName: 'Stanford University',
          country: 'USA',
        },
        {
          affiliationName: 'Max Planck Institute',
          country: 'Germany',
        },
      ],
      hIndex: 25,
      h5Index: 18,
      publicationCount: 45,
      publicationCount1Y: 8,
      lowConfidencePublicationCount: 1,
      citationCount: 500,
      selfCitationRate: 0.05,
      submissionRecord: [
        {
          frontiersArticleId: 3333,
          submissionDate: '2024-08-01T00:00:00Z',
        },
        {
          frontiersArticleId: 3334,
          submissionDate: '2024-09-15T00:00:00Z',
        },
        {
          frontiersArticleId: 3335,
          submissionDate: '2024-10-01T00:00:00Z',
        },
      ],
      rejectionRecord: [
        {
          submissionId: 2222,
          frontiersArticleId: 3334,
          submissionDate: '2024-09-15T00:00:00Z',
          submissionOrder: 2,
          isRejected: 1,
          rejectionReason: 'Insufficient novelty',
        },
      ],
      retractedPublicationCount: 0,
      retractionRecord: [],
    },
    {
      loopId: 3,
      subAuthorId: 25,
      identificationStep: 'EmailMatchingStep',
      airaId: 112233445,
      firstName: 'Alice',
      middleName: 'C.',
      lastName: 'Johnson',
      fullName: 'Alice C. Johnson',
      isSubmitting: true,
      isCorresponding: true,
      order: 3,
      email: 'alice.johnson@example.com',
      affiliations: [
        {
          affiliationName: 'Oxford University',
          country: 'UK',
        },
      ],
      hIndex: 30,
      h5Index: 20,
      publicationCount: 60,
      publicationCount1Y: 12,
      lowConfidencePublicationCount: 3,
      citationCount: 700,
      selfCitationRate: 0.08,
      submissionRecord: [
        {
          frontiersArticleId: 4444,
          submissionDate: '2024-11-05T00:00:00Z',
        },
        {
          frontiersArticleId: 4445,
          submissionDate: '2024-11-20T00:00:00Z',
        },
      ],
      rejectionRecord: [
        {
          submissionId: 3333,
          frontiersArticleId: 4444,
          submissionDate: '2024-11-05T00:00:00Z',
          submissionOrder: 3,
          isRejected: 1,
          rejectionReason: 'Methodological flaws',
        },
      ],
      retractedPublicationCount: 2,
      retractionRecord: [
        {
          publicationId: 5555,
          retractionDate: '2023-11-01T00:00:00Z',
          originalDoi: '10.9876/example-doi',
          retractionDoi: '10.5432/retraction-doi',
          retractionTypes: ['Error', 'Ethical issues'],
          retractionReasons: ['Significant error in data', 'Ethical concerns'],
          isCorrespondingAuthor: true,
          publisherId: 6666,
          publisherName: 'Springer',
        },
      ],
    },
  ],
});
</script>

<template>
  <div class="app-container">
    <h1>Demo | Vue 3 Researcher Cards</h1>
    <div class="researchers-container">
      <ResearcherProfile
        v-for="author in researcherData.authors"
        :key="author.loopId"
        :author="author"
      />
    </div>
  </div>
</template>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.researchers-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}
</style>
