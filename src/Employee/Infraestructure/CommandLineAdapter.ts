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

  const rawInputs = process.argv;

  try {
    const { name: employeeName, days: workedDays } = extractInputArg(rawInputs);

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
