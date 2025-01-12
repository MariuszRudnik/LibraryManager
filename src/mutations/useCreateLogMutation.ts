import { useMutation } from "@tanstack/react-query";
import { apiCall } from "../utills/apiCall";
import { Log, LogDto } from "../types";

export const useCreateLogMutation = () => {
  return useMutation({
    mutationKey: ["new-log"],
    mutationFn: async (body: LogDto) => {
      apiCall<Log, LogDto>("logs", {
        method: "POST",
        body,
      });
    },
  });
};
