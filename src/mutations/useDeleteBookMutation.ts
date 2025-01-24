import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiCall } from "../utills/apiCall";

export const useDeleteBookMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["delete-book"],
    mutationFn: async (id: string) => {
      return await apiCall(`books/${id}`, {
        method: "DELETE",
      });
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["books"],
        exact: true,
      });
    },
  });
};
