import { useMessagesWithQuery } from "../generated/graphql";

export function useMessagesWith(id: string) {
  return useMessagesWithQuery({
    variables: { id },
    fetchPolicy: "cache-and-network",
  });
}
