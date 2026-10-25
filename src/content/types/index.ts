import { ComponentType } from "react";

export enum PostCategory {
  Guitar = "guitar",
  Reflections = "reflections",
  Production = "production",
  Events = "events",
}

export enum PostAuthor {
  ErpProject = "erpproject",
}

export interface Post {
  id: string;
  category: PostCategory;
  title: string;
  description: string;
  content: ComponentType;
  date: Date;
  author: PostAuthor;
  /** Optimized WebP header image (path under /public). */
  cover: string;
}
