import { Employee } from "../src/Employee/Domain/Employee";
import { EmployeeName } from "../src/Employee/Domain/ValueObjects/EmployeeName";

describe("Test the employee model", function () {
  it("should throw an error if pass an empty string as name", function () {
    const name = "";

    expect(() => {
      return new Employee(new EmployeeName(name));
    }).toThrowError("The employee name is needed");
  });

  it("should return a employee model with a given name", function () {
    const name = "Yalian";

    const employee = new Employee(new EmployeeName(name));

    expect(employee.name.value).toBe(name);
  });
});
