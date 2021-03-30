import { Day } from "../src/Shared/Domain/ValueObjects/Day";

describe("Test shared domain modales", () => {
  it("should throw an error if enter a day with incorrect format", function () {
    const day = "Monday";

    expect(() => {
      new Day(day);
    }).toThrowError(`${day} is not available`);
  });

  it("should return a Day class with a given day in correct format", function () {
    const day = "MO";

    expect(new Day(day).value).toBe(day);
  });
});
