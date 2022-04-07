import { DateTimeFilter } from "../../util/DateTimeFilter";
import { StringFilter } from "../../util/StringFilter";

export type CookBookWhereInput = {
  cookType?: "Cook" | "Fry";
  createdAt?: DateTimeFilter;
  id?: StringFilter;
  title?: StringFilter;
};
