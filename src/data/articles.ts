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
    title: `Статья ${index + 1}`,
    description: `Краткое описание статьи ${index + 1}`,
    category: ['Технологии', 'Наука', 'Здоровье', 'Бизнес'][Math.floor(Math.random() * 4)],
    date: new Date(Date.now() - Math.random() * 10000000000).toISOString(),
    author: ['Иван Петров', 'Анна Смирнова', 'Михаил Иванов'][Math.floor(Math.random() * 3)],
    content: `Подробное содержание статьи ${index + 1}...`
  }));
  