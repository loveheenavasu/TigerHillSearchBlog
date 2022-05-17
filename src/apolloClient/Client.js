import { ApolloClient, InMemoryCache, from, ApolloLink } from "@apollo/client";

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: "https://api.staging.tigerhall.net/graphql",
});

export default client;
