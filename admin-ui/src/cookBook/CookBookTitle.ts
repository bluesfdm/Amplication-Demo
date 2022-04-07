import { CookBook as TCookBook } from "../api/cookBook/CookBook";

export const COOKBOOK_TITLE_FIELD = "title";

export const CookBookTitle = (record: TCookBook): string => {
  return record.title || record.id;
};
