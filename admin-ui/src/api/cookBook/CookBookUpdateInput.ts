export type CookBookUpdateInput = {
  cookType?: "Cook" | "Fry";
  label?: Array<"Delicious" | "Recommend">;
  mainImg?: string;
  title?: string;
};
