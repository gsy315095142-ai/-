export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: '入门' | '进阶' | '高阶';
  image: string;
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}

export enum AdvisorState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}