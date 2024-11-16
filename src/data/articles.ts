export interface Article {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    author: string;
    content: string;
  }
  
  export const mockArticles: Article[] = Array.from({ length: 100 }, (_, index) => ({
    id: index + 1,
    title: `Article ${index + 1}`,
    description: `Short description for article ${index + 1}`,
    category: ['Technology', 'Science', 'Health', 'Business'][Math.floor(Math.random() * 4)],
    date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    author: ['John Doe', 'Jane Smith', 'Bob Johnson'][Math.floor(Math.random() * 3)],
    content: `Detailed content for article ${index + 1}...`
  }));
  