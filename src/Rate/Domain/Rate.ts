import { Day } from "../../Shared/Domain/ValueObjects/Day";
import { RatePrice } from "./ValueObjects/RatePrice";
import { Hour } from "../../Shared/Domain/ValueObjects/Hour";

export class Rate {
  private readonly _day: Day;
  private readonly _startAt: Hour;
  private readonly _endAt: Hour;
  private readonly _price: RatePrice;

  constructor(day: Day, startAt: Hour, endAt: Hour, price: RatePrice) {
    this._day = day;
    this._startAt = startAt;
    this._endAt = endAt;
    this._price = price;
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

  get price(): RatePrice {
    return this._price;
  }
}
