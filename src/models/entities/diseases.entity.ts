import { AccountEntity } from '@/models/entities/account.entity'

export interface DiseasesEntity {
  id: string;
  name: string;
  overview: string;
  symptoms: string;
  causes: string;
  riskFactors: string;
  complications: string;
  prevention: string;
  diagnosis: string;
  treatment: string;
  lifestyleAndHomeRemedies: string;
  copingAndSupport: string;
  alternativeMedicine: string;
  publishDate: string;
  tags: string[];
  images: string[];
  author: AccountEntity;
}