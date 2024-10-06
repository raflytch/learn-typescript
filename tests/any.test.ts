describe("Any", () => {
  it("should return any value", () => {
    const person: any = {
      name: "Rafly",
      age: 20,
      isVip: true,
      address: {
        city: "Jakarta",
        country: "Indonesia",
      },
    };

    person.name = "Abdillah";
    person.age = 21;

    console.info(person);
  });
});
