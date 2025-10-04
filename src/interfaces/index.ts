export interface ICategory {
  id: number;
  name: string;
}

export interface IPost {
  id: number;
  title: string;
  author: string;
  summary: string;
  content: string;
  category: ICategory;
  createdAt: string;
}
