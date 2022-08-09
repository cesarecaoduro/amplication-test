import { User } from "../user/User";

export type Project = {
  createdAt: Date;
  id: string;
  projectRole?: Array<User>;
  updatedAt: Date;
  users?: Array<User>;
};
