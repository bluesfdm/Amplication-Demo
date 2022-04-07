import { CookBookWhereInput } from "./CookBookWhereInput";
import { CookBookOrderByInput } from "./CookBookOrderByInput";

export type CookBookFindManyArgs = {
  where?: CookBookWhereInput;
  orderBy?: Array<CookBookOrderByInput>;
  skip?: number;
  take?: number;
};
