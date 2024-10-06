describe("Union Type", () => {
  it("should return union type", () => {
    let name: string | number | boolean = "Rafly";
    name = 20;
    name = true;

    console.info(name);
  });

  it("should support union typeof operator", () => {
    const process = (value: string | number | boolean) => {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 20;
      } else if (typeof value === "boolean") {
        return !value;
      }
    };

    expect(process("Rafly")).toBe("RAFLY");
    expect(process(20)).toBe(40);
    expect(process(true)).toBe(false);
  });
});
