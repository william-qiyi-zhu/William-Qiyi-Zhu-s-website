export interface Project {
  name: string;
  type: string;
  link: string;
  description: string;
  category: 'sci-fi' | 'logic' | 'strategy';
  note?: string;
}

export interface Skill {
  name: string;
  percentage: number;
  color: string;
}

export interface Message {
  sender: 'user' | 'agent';
  text: string;
  timestamp: string;
}
