import { User } from "../types";

export const hasEmailInDataBase = (data: User[], email: string) => {
  return data.some((item) => item.email === email);
};
