export type User = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: "client" | "admin";
  libraryCardCode: string;
};
export type UserDto = Omit<User, "id">;

export type Log = {
  id: string;
  timestamp: string;
  userId: string;
  action: string;
};
export type LogDto = Omit<Log, "id">;
