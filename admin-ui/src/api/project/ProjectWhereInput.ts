import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type ProjectWhereInput = {
  id?: StringFilter;
  projectRole?: UserListRelationFilter;
  users?: UserListRelationFilter;
};
