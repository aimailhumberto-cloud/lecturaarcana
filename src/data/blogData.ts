export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  content: string;
}

import { BLOG_ARTICLES as esArticles } from './blogData.es';
import { BLOG_ARTICLES_EN as enArticles } from './blogData.en';

export const getBlogArticles = (language: string): BlogArticle[] => {
  if (language.startsWith('en')) {
    return enArticles;
  }
  return esArticles;
};
