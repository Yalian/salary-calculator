import { CalculateAmountToPay } from "../Application/UseCases/CalculateAmountToPay";
import { JsonRateRepository } from "../../Rate/Infraestructure/JsonRateRepository";
import { extractInputArg } from "../../Utils/ExtractInputArg";
import { Employee } from "../Domain/Employee";
import { EmployeeName } from "../Domain/ValueObjects/EmployeeName";
import { TimeWorked } from "../../TimeWorked/Domain/TimeWorked";
import { Day } from "../../Shared/Domain/ValueObjects/Day";
import { Hour } from "../../Shared/Domain/ValueObjects/Hour";

const CommandLineAdapter = () => {
  const jsonDatabaseRepository = new JsonRateRepository();
  const calculateAmountToPayAction = new CalculateAmountToPay(
    jsonDatabaseRepository
  );

  try {
    const { name: employeeName, days: workedDays } = extractInputArg();
    console.log(employeeName);

    const employee = new Employee(new EmployeeName(employeeName));
    const daysWorked = workedDays.map(
      (rawWorkedDay) =>
        new TimeWorked(
          new Day(rawWorkedDay.day),
          new Hour(rawWorkedDay.start),
          new Hour(rawWorkedDay.end)
        )
    );

    const amountToPay = calculateAmountToPayAction.execute(
      employee,
      daysWorked
    );

    console.log(
      `The amount to pay ${employee.name.value} is: ${amountToPay} USD`
    );
  } catch (err) {
    console.error(err.message);
  }
};

export default CommandLineAdapter;
