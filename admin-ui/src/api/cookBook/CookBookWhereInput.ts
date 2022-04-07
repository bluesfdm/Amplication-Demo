import { StringFilter } from "../../util/StringFilter";

export type CookBookWhereInput = {
  cookType?: "Cook" | "Fry";
  id?: StringFilter;
  title?: StringFilter;
};
