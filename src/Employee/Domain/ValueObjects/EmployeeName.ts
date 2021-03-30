export class EmployeeName {
  private readonly _value: string;
  private readonly mustCapitalize = true;

  constructor(value: string) {
    if (value === "") {
      throw new Error("The employee name is needed");
    }
    this._value = this.mustCapitalize ? EmployeeName.capitalize(value) : value;
  }

  get value(): string {
    return this._value;
  }

  private static capitalize(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
  }
}
