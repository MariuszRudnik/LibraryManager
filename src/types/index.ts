export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "client";
  libraryCardCode: string;
};
export type UserDto = Omit<User, "id">;
