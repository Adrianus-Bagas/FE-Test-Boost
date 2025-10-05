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

export interface IMenus {
  title: string;
  path: string;
}

export interface ICreateForm {
  step:
    | "blank"
    | "1 - Blog Metadata"
    | "2 - Blog Summary & Category"
    | "3 - Blog Content"
    | "4 - Review & Submit";
  title: string;
  author: string;
  summary: string;
  content: string;
  category: ICategory | null;
}
