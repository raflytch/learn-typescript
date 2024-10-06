import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should return type alias", () => {
    const category: Category = {
      id: 1,
      name: "Category 1",
      imageUrl: "https://example.com/category1.png",
      description: "This is category 1.",
    };

    const product: Product = {
      id: 1,
      name: "Product 1",
      imageUrl: "https://example.com/product1.png",
      description: "This is product 1.",
      price: 20000000,
      category: category,
    };

    console.info(product);
    console.info(product.category);
    console.info(category);
  });
});
