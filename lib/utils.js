import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { algoliasearch } from 'algoliasearch';
import OpenAI from 'openai';

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export const initAlgolia = () => {
  if (process.env.ALGOLIA_APP_ID && process.env.ALGOLIA_API_KEY) {
    console.log('heyo ALGOL ONE ', process.env.ALGOLIA_APP_ID);
    return algoliasearch(
      process.env.ALGOLIA_APP_ID,
      process.env.ALGOLIA_API_KEY,
    );
  }
  return null;
}

export const initOpenai = () => {
  if (process.env.OPENAI_API_KEY && process.env.OPENAI_PROJECT_ID) {
    return OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      project: process.env.OPENAI_PROJECT_ID,
    });  
  }
  return null;
}
