export class Day {
  private readonly _value: DayType;

  constructor(value: string) {
    if (!availableDays[value as DayType]) {
      throw new Error(`${value} day is not supported`);
    }
    this._value = value as DayType;
  }

  get value(): DayType {
    return this._value;
  }
}

type DayType = "MO" | "TU" | "WE" | "TH" | "FR" | "SA" | "SU";

const availableDays: { [key in DayType]: boolean } = {
  MO: true,
  TU: true,
  WE: true,
  TH: true,
  FR: true,
  SA: true,
  SU: true,
};
