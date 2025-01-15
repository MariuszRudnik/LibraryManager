import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types";

type UserStore = {
  user: User;
  setUserInLocalStore: (newUser: User) => void;
};

export const useUserStore = create<UserStore>()(
  persist(
    (set) => ({
      user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        role: "client",
        libraryCardCode: "",
      },
      setUserInLocalStore: (newUser) =>
        set({
          user: newUser,
        }),
    }),
    {
      name: "user-store",
    }
  )
);
