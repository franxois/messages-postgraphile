import React from "react";
import {
  ApolloClient,
  ApolloProvider,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
import { useUser } from "./User";
import { setContext } from "@apollo/client/link/context";

export const MyApolloProvider: React.FC = ({ children }) => {
  const { state } = useUser();

  const httpLink = createHttpLink({
    uri: "/graphql",
  });

  const authLink = setContext((_, { headers }) => {
    const res = { headers: { ...headers } };

    if ("jwt" in state) {
      res.headers.authorization = `Bearer ${state.jwt}`;
    }

    // return the headers to the context so httpLink can read them
    return res;
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
