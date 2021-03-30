import { Day } from "../../Shared/Domain/ValueObjects/Day";
import { Rate } from "./Rate";

export interface RateRepository {
  getRatesByDay(day: Day): Rate[] | null;
}
