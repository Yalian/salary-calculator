import { RatePrice } from "../src/Rate/Domain/ValueObjects/RatePrice";
import { Rate } from "../src/Rate/Domain/Rate";
import { Day } from "../src/Shared/Domain/ValueObjects/Day";
import { Hour } from "../src/Shared/Domain/ValueObjects/Hour";
import { JsonRateRepository } from "../src/Rate/Infraestructure/JsonRateRepository";

describe("Test the rate value objects", () => {
  it("should throw an error when given price is lower than zero", function () {
    const price = -1;
    expect(() => {
      new RatePrice(price);
    }).toThrowError("Price can not be lower than zero");
  });

  it("should return an instantiated `RatePrice` when given price is equal or higher than zero", function () {
    const price = 25;
    expect(new RatePrice(price).value).toBe(price);
  });

  it("should return the day with that was created", function () {
    const day = "MO";
    const startAt = "02:00";
    const endAt = "04:00";
    const price = 100;

    const rate = new Rate(
      new Day(day),
      new Hour(startAt),
      new Hour(endAt),
      new RatePrice(price)
    );

    expect(rate.day.value).toBe(day);
  });

  it("should return null if the day isn't in the database", function () {
    const DayMock = jest.fn<Day, any>(() => {
      return Object.defineProperty({ _value: "Monday" }, "value", {
        get: () => "Monday",
      });
    });

    const mockedDay = new DayMock();

    console.log(mockedDay.value);

    const jsonRepository = new JsonRateRepository();
    expect(jsonRepository.getRatesByDay(mockedDay)).toBe(null);
  });
});
