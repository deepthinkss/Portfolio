export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  liveDemo?: string;
  githubRepo?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: string;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}