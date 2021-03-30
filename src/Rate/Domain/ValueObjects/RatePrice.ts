export class RatePrice {
  private readonly _value: number;

  constructor(value: number) {
    if (value < 0) {
      throw new Error("Price can not be lower than zero");
    }
    this._value = value;
  }

  get value(): number {
    return this._value;
  }
}
