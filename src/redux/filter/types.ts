// type Sort = {
//   name: string;
//   sortProperty: "rating" | "title" | "price" | "-rating" | "-title" | "-price";
// };

import { sortItem } from "../../components/Sort";

export interface FilterSliceState {
  searchValue: string;
  categoryId: number;
  currentPage: number;
  sort: sortItem;
}
