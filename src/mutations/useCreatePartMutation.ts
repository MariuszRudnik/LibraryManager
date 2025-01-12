import { useMutation } from "@tanstack/react-query";
import { apiCall } from "../utills/apiCall";
import { User, UserDto } from "../types";

export const useCreateUserMutation = () => {
  return useMutation({
    mutationKey: ["new-user"],
    mutationFn: async (body: UserDto) => {
      apiCall<User, UserDto>("users", {
        method: "POST",
        body,
      });
    },
  });
};
