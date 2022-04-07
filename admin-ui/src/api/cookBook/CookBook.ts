export type CookBook = {
  cookType?: "Cook" | "Fry";
  createdAt: Date;
  id: string;
  label?: Array<"Delicious" | "Recommend">;
  mainImg: string;
  title: string;
  updatedAt: Date;
};
