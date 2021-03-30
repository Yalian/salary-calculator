const validationPattern = /\d{2}:\d{2}/;

export class Hour {
  private readonly _value: string;
  private readonly _hour: number;
  private readonly _minute: number;

  constructor(value: string) {
    if (!validationPattern.test(value)) {
      throw new Error("The value does not have correct format");
    }
    this._value = value;
    const hourAndMinutes = value.split(":");

    this._hour = Number(hourAndMinutes[0]);
    this._minute = Number(hourAndMinutes[1]);
  }

  get value(): string {
    return this._value;
  }

  get hour(): number {
    return this._hour;
  }

  get minute(): number {
    return this._minute;
  }
}
