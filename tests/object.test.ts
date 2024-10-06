describe("Object", () => {
  it("should return object", () => {
    const person: { name: string; age: number; isVip: boolean } = {
      name: "Rafly",
      age: 20,
      isVip: true,
    };

    person.age = 20;
    person.name = "Abdillah";
  });
});
