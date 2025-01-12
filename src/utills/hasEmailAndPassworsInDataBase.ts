import { User } from "../types";

export const hasEmailAndPasswordInDataBase = (
  data: User[],
  email: string,
  password: string
): User | null => {
  const foundUser = data.find(
    (user) => user.email === email && user.password === password
  );

  return foundUser || null;
};
