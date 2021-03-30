import { RatePrice } from "../src/Rate/Domain/ValueObjects/RatePrice";

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
});
