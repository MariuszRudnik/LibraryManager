import { queryOptions } from "@tanstack/react-query";
import { Log } from "../types";
import { apiCall } from "../utills/apiCall";

export const logs = queryOptions({
  queryKey: ["logs"],
  queryFn: async () => {
    return apiCall<Log[]>("logs");
  },
});