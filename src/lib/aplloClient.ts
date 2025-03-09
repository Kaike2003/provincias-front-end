import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://gql-provincias-back-end.up.railway.app/graphql",
  cache: new InMemoryCache(),
});

export default client;
