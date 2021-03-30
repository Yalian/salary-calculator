import { TimeWorked } from "../src/TimeWorked/Domain/TimeWorked";
import { Day } from "../src/Shared/Domain/ValueObjects/Day";
import { Hour } from "../src/Shared/Domain/ValueObjects/Hour";

describe("test the `TimeWorked` model", () => {
  it("should return an instance of TimeWorked with given Day, StartAt, EndAt parameters", function () {
    const startAt = "10:00";
    const endAt = "12:00";
    const day = "MO";

    const timeWorked = new TimeWorked(
      new Day(day),
      new Hour(startAt),
      new Hour(endAt)
    );

    expect(timeWorked.day.value).toBe(day);
    expect(timeWorked.startAt.value).toBe(startAt);
    expect(timeWorked.endAt.value).toBe(endAt);
  });
});
