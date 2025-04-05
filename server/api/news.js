// server/api/news.js
export default defineEventHandler(async (event) => {
    const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=879084926c10456e9f24842192fccf0a';
  
    try {
      const response = await $fetch(url);
      return response;
    } catch (error) {
      console.error('Error fetching news:', error);
      return { error: 'Failed to fetch news' };
    }
  });
  