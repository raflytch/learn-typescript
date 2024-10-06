describe("Array", () => {
  const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const names: string[] = ["Rafly", "Aziz", "Abdillah"];

  console.info(numbers);
  console.info(names);
  it("should return 10", () => {
    expect(numbers).toContain(10);
    expect(names).toContain("Abdillah");
  });

  it("should return Readonly Array", () => {
    const hobbies: ReadonlyArray<string> = ["Rafly", "Aziz", "Abdillah"];
    console.info(hobbies[0]);
    console.info(hobbies[1]);
    console.info(hobbies[2]);
  });

  it("should return tuple", () => {
    const person: readonly [string, string, number] = ["Rafly", "Abdillah", 20];

    console.info(person[0]);
    console.info(person[1]);
    console.info(person[2]);
  });
});
