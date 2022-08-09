import { UserCreateNestedManyWithoutProjectsInput } from "./UserCreateNestedManyWithoutProjectsInput";

export type ProjectCreateInput = {
  projectRole?: UserCreateNestedManyWithoutProjectsInput;
  users?: UserCreateNestedManyWithoutProjectsInput;
};
