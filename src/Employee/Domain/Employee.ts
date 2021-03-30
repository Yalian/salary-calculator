import { EmployeeName } from "./ValueObjects/EmployeeName";

export class Employee {
  private readonly _name: EmployeeName;

  constructor(name: EmployeeName) {
    this._name = name;
  }

  get name(): EmployeeName {
    return this._name;
  }
}
