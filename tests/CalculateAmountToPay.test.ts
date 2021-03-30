import { extractInputArg } from "../src/Utils/ExtractInputArg";
import { CalculateAmountToPay } from "../src/Employee/Application/UseCases/CalculateAmountToPay";
import { JsonRateRepository } from "../src/Rate/Infraestructure/JsonRateRepository";
import { Employee } from "../src/Employee/Domain/Employee";
import { EmployeeName } from "../src/Employee/Domain/ValueObjects/EmployeeName";
import { TimeWorked } from "../src/TimeWorked/Domain/TimeWorked";
import { Day } from "../src/Shared/Domain/ValueObjects/Day";
import { Hour } from "../src/Shared/Domain/ValueObjects/Hour";

describe("Test the `CalculateAmountToPay` use case", () => {
  it("should return 215 USD when the input is `RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00`", function () {
    const processArgvMock = [
      "input=RENE=MO10:00-12:00,TU10:00-12:00,TH01:00-03:00,SA14:00-18:00,SU20:00-21:00",
    ];
    process.argv = processArgvMock;
    const data = extractInputArg();

    const action = new CalculateAmountToPay(new JsonRateRepository());

    const timeWorked = data.days.map((d) => {
      return new TimeWorked(new Day(d.day), new Hour(d.start), new Hour(d.end));
    });

    expect(
      action.execute(new Employee(new EmployeeName(data.name)), timeWorked)
    ).toBe(215);
  });

  it("should return 215 USD when the input is `ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00`", function () {
    const processArgvMock = [
      "input=ASTRID=MO10:00-12:00,TH12:00-14:00,SU20:00-21:00",
    ];
    process.argv = processArgvMock;
    const data = extractInputArg();
    const action = new CalculateAmountToPay(new JsonRateRepository());

    const timeWorked = data.days.map((d) => {
      return new TimeWorked(new Day(d.day), new Hour(d.start), new Hour(d.end));
    });

    expect(
      action.execute(new Employee(new EmployeeName(data.name)), timeWorked)
    ).toBe(85);
  });

  it("should return 195 USD when the input is `ASTRID=MO07:00-15:00,TH12:00-14:00,SU20:00-21:00`", function () {
    const processArgvMock = [
      "input=ASTRID=MO07:00-15:00,TH12:00-14:00,SU20:00-21:00",
    ];
    process.argv = processArgvMock;
    const data = extractInputArg();
    const action = new CalculateAmountToPay(new JsonRateRepository());

    const timeWorked = data.days.map((d) => {
      return new TimeWorked(new Day(d.day), new Hour(d.start), new Hour(d.end));
    });

    expect(
      action.execute(new Employee(new EmployeeName(data.name)), timeWorked)
    ).toBe(195);
  });
});
