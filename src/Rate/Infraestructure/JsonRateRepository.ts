import { RateRepository } from "../Domain/RateRepository";
import { Rate } from "../Domain/Rate";
import { Day } from "../../Shared/Domain/ValueObjects/Day";
import { RatePrice } from "../Domain/ValueObjects/RatePrice";
import { Hour } from "../../Shared/Domain/ValueObjects/Hour";

export class JsonRateRepository implements RateRepository {
  getRatesByDay(day: Day): Rate[] | null {
    const findRate = data[day.value];
    if (!findRate) {
      return null;
    }

    return findRate.map(
      (rate) =>
        new Rate(
          day,
          new Hour(rate.startAt),
          new Hour(rate.endAt),
          new RatePrice(rate.price)
        )
    );
  }
}

const sharedRatesFromMondayToFriday = [
  {
    startAt: "00:01",
    endAt: "09:00",
    price: 25,
  },
  {
    startAt: "09:01",
    endAt: "18:00",
    price: 15,
  },
  {
    startAt: "18:01",
    endAt: "24:00",
    price: 20,
  },
];

const sharedRatesFromSaturdayToSunday = [
  {
    startAt: "00:01",
    endAt: "09:00",
    price: 30,
  },
  {
    startAt: "09:01",
    endAt: "18:00",
    price: 20,
  },
  {
    startAt: "18:01",
    endAt: "24:00",
    price: 25,
  },
];

const data = {
  MO: sharedRatesFromMondayToFriday,
  TU: sharedRatesFromMondayToFriday,
  WE: sharedRatesFromMondayToFriday,
  TH: sharedRatesFromMondayToFriday,
  FR: sharedRatesFromMondayToFriday,
  SA: sharedRatesFromSaturdayToSunday,
  SU: sharedRatesFromSaturdayToSunday,
};
