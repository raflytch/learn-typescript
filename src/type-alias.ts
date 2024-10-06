export type ID = string | number;

export type Category = {
  id: ID;
  name: string;
  imageUrl: string;
  description: string;
};

export type Product = {
  id: ID;
  name: string;
  imageUrl: string;
  description: string;
  price: number;
  category: Category;
};
