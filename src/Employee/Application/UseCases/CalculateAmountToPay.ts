import { Employee } from "../../Domain/Employee";
import { TimeWorked } from "../../../TimeWorked/Domain/TimeWorked";
import { RateRepository } from "../../../Rate/Domain/RateRepository";
import { isBetween } from "../../../Utils/Validators";
import { Rate } from "../../../Rate/Domain/Rate";

export class CalculateAmountToPay {
  constructor(private readonly rateRepository: RateRepository) {}

  execute(employee: Employee, timeWorked: TimeWorked[]): number {
    return timeWorked.reduce((acc, time) => {
      const startAt = time.startAt.hour;
      const endAt = time.endAt.hour;

      const rates = this.rateRepository.getRatesByDay(time.day);

      if (rates) {
        const payment = this.getAmountToPay(startAt, endAt, rates);
        return acc + payment;
      }

      return acc;
    }, 0);
  }

  private getAmountToPay(
    startAt: number,
    endAt: number,
    dayRates: Rate[]
  ): number {
    return (
      dayRates?.reduce((prev, rate) => {
        if (isBetween(startAt, rate.startAt.hour, rate.endAt.hour)) {
          if (rate.endAt.hour >= endAt) {
            const workedHours = Math.abs(endAt - startAt);
            return prev + workedHours * rate.price.value;
          } else {
            const workedHours = Math.abs(rate.endAt.hour - startAt);
            return prev + workedHours * rate.price.value;
          }
        }
        if (isBetween(endAt, rate.startAt.hour, rate.endAt.hour)) {
          const workedHours = endAt - rate.startAt.hour;
          return prev + workedHours * rate.price.value;
        }

        return prev;
      }, 0) || 0
    );
  }
}
