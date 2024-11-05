import { z } from 'zod';

export const faqSchema = z.object({
  question: z.string().min(1, 'Question is required').max(200, 'Question is too long'),
  answer: z.string().min(1, 'Answer is required').max(1000, 'Answer is too long')
});

export const bannerItemSchema = z.object({
  title: z.string().min(1, 'Title is required').max(100, 'Title is too long'),
  image: z.string().url('Invalid image URL'),
  author: z.string().min(1, 'Author is required').max(100, 'Author name is too long'),
  link: z.string().url('Invalid URL')
});

export const socialLinkSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  href: z.string().url('Invalid URL')
});