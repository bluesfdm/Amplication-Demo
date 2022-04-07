import { SortOrder } from "../../util/SortOrder";

export type CookBookOrderByInput = {
  cookType?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  label?: SortOrder;
  mainImg?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
