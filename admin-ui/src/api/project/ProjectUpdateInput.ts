import { UserUpdateManyWithoutProjectsInput } from "./UserUpdateManyWithoutProjectsInput";

export type ProjectUpdateInput = {
  projectRole?: UserUpdateManyWithoutProjectsInput;
  users?: UserUpdateManyWithoutProjectsInput;
};
