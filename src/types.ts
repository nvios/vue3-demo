interface Affiliation {
  affiliationName: string;
  country: string;
}

interface SubmissionRecord {
  frontiersArticleId: number;
  submissionDate: string;
}

interface RejectionRecord {
  submissionId: number;
  frontiersArticleId: number;
  submissionDate: string;
  submissionOrder: number;
  isRejected: number;
  rejectionReason: string;
}

interface RetractionRecord {
  publicationId: number;
  retractionDate: string;
  originalDoi: string;
  retractionDoi: string;
  retractionTypes: string[];
  retractionReasons: string[];
  isCorrespondingAuthor: boolean;
  publisherId: number;
  publisherName: string;
}

interface Author {
  loopId: number;
  subAuthorId: number;
  identificationStep: string;
  airaId: number;
  firstName: string;
  middleName: string;
  lastName: string;
  fullName: string;
  isSubmitting: boolean;
  isCorresponding: boolean;
  order: number;
  email: string;
  affiliations: Affiliation[];
  hIndex: number;
  h5Index: number;
  publicationCount: number;
  publicationCount1Y: number;
  lowConfidencePublicationCount: number;
  citationCount: number;
  selfCitationRate: number;
  submissionRecord: SubmissionRecord[];
  rejectionRecord: RejectionRecord[];
  retractedPublicationCount: number;
  retractionRecord: RetractionRecord[];
}

interface ResearcherData {
  spaceId: string;
  jobUid: string;
  articleId: number;
  submissionDate: string;
  authors: Author[];
}

export type { ResearcherData, Author };