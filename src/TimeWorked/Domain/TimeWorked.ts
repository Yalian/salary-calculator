import { Day } from "../../Shared/Domain/ValueObjects/Day";
import { Hour } from "../../Shared/Domain/ValueObjects/Hour";

export class TimeWorked {
  private readonly _day: Day;
  private readonly _startAt: Hour;
  private readonly _endAt: Hour;

  constructor(day: Day, startAt: Hour, endAt: Hour) {
    this._day = day;
    this._startAt = startAt;
    this._endAt = endAt;
  }

  get day(): Day {
    return this._day;
  }

  get startAt(): Hour {
    return this._startAt;
  }

  get endAt(): Hour {
    return this._endAt;
  }
}
