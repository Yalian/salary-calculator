import { Day } from "../src/Shared/Domain/ValueObjects/Day";
import { Hour } from "../src/Shared/Domain/ValueObjects/Hour";

describe("Test shared domain modales", () => {
  it("should throw an error if enter a day with incorrect format", function () {
    const day = "Monday";

    expect(() => {
      new Day(day);
    }).toThrowError(`${day} day is not supported`);
  });

  it("should throw an error when the hour format is incorrect", function () {
    const time = "1:00";
    expect(() => {
      new Hour(time);
    }).toThrowError("The value does not have correct format");
  });

  it("should return the correct minutes", function () {
    const time = "01:20";
    expect(new Hour(time).minute).toBe(20);
  });

  it("should return a Day class with a given day in correct format", function () {
    const day = "MO";

    expect(new Day(day).value).toBe(day);
  });
});
