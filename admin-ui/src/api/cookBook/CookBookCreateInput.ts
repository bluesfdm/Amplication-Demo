export type CookBookCreateInput = {
  cookType: "Cook" | "Fry";
  label?: Array<"Delicious" | "Recommend">;
  mainImg: string;
  title: string;
};
