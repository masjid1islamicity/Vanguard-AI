export type PageId =
  | 'home'
  | 'about'
  | 'solutions'
  | 'products'
  | 'industries'
  | 'islamicity-kaffah'
  | 'pricing'
  | 'blog'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'refund'
  | 'cookies';

export type Theme = 'dark' | 'light';

export interface IndustryCard {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  metric: string;
  metricLabel: string;
  capabilities: string[];
  caseStudy: string;
}

export interface AIProduct {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  latency: string;
  accuracy: string;
  securityTier: string;
}

export interface SolutionItem {
  id: string;
  title: string;
  summary: string;
  outcomes: string[];
  architecturePoints: string[];
}

export interface PricingPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  currency: string;
  currencySymbol: string;
  description: string;
  highlighted?: boolean;
  features: string[];
  ctaText: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  role: string;
  date: string;
  readTime: string;
  category: string;
}

export interface MilestoneItem {
  phase: string;
  title: string;
  timeline: string;
  costINR: number;
  deliverables: string[];
}

export interface PortfolioProject {
  title: string;
  type: string;
  techStack: string[];
  description: string;
  metric: string;
  githubUrl: string;
  demoUrl: string;
}
