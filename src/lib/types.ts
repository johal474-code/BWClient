// Client types
export type ClientStatus = 'PROSPECT' | 'ACTIVE' | 'INACTIVE' | 'ARCHIVED';
export type RiskProfile = 'CONSERVATIVE' | 'MODERATE' | 'AGGRESSIVE';
export type UserRole = 'SUPER_ADMIN' | 'ADMIN' | 'ADVISOR' | 'VIEWER';

export interface Client {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  dateOfBirth?: Date;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  postCode?: string;
  country: string;
  advisorId: string;
  status: ClientStatus;
  investmentGoal?: string;
  riskProfile?: RiskProfile;
  totalAssets?: number;
  annualIncome?: number;
  fcaRefNo?: string;
  lastReviewDate?: Date;
  nextReviewDate?: Date;
  consentGiven: boolean;
  consentDate?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Portfolio {
  id: string;
  clientId: string;
  name: string;
  type: 'ISA' | 'PENSION' | 'GENERAL_INVESTMENT' | 'SAVINGS' | 'OTHER';
  totalValue: number;
  currency: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Document {
  id: string;
  clientId: string;
  title: string;
  type: DocumentType;
  url: string;
  size: number;
  mimeType: string;
  uploadedAt: Date;
  expiresAt?: Date;
  notes?: string;
}

export type DocumentType =
  | 'FACT_FIND'
  | 'SUITABILITY_REPORT'
  | 'ANNUAL_STATEMENT'
  | 'CORRESPONDENCE'
  | 'KYC'
  | 'COMPLIANCE'
  | 'OTHER';

export interface Communication {
  id: string;
  clientId: string;
  type: 'EMAIL' | 'PHONE' | 'MEETING' | 'VIDEO_CALL' | 'LETTER';
  date: Date;
  subject?: string;
  notes: string;
  outcome?: string;
  createdAt: Date;
}
