import { sayHello } from "../src/say-hello";

describe("sayHello", () => {
  it("should return hello Rafly", () => {
    expect(sayHello("Rafly")).toBe("Hello Rafly!");
  });
});
