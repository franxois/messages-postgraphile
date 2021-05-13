import React from "react";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { useUser } from "./User";

export const MyApolloProvider: React.FC = ({ children }) => {
  const { state } = useUser();

  const headers: { authorization?: string } = {};
  if ("jwt" in state) {
    headers.authorization = `Bearer ${state.jwt}`;
  }

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    uri: "/graphql",
    headers,
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
