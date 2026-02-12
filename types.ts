export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: number;
  doi: string;
  period: 'present-2021' | '2020-2011' | '2010 and earlier' | 'book';
}

export type MemberCategory = 
  | 'Professor' 
  | 'Research Professor' 
  | 'Post doctors' 
  | 'Ph.D students' 
  | 'M.S students' 
  | 'Undergraduate students' 
  | 'Staff' 
  | 'Alumni';

export interface Member {
  id: string;
  name: string;
  nameEn?: string;
  role: string;
  image: string;
  specialty?: string;
  category: MemberCategory;
  degree?: string;
  email?: string;
  researchArea?: string;
  telephone?: string;
  currentInstitution?: string;
}

export interface BoardItem {
  id: string;
  title: string;
  date: string;
  type: 'Notice' | 'News' | 'Gallery';
  image?: string;
  images?: string[];
  source?: string;
  link?: string;
  links?: { label: string; url: string }[];
  views?: number;
}