import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
import DogPhoto from "./DogPhoto"
import Dogs from "./Dogs"




const client = new ApolloClient({
  uri: "http://0.0.0.0:3000/graphql"
});


const HelloWorld = () => (
  <ApolloProvider client={client}>
    <Dogs />
  </ApolloProvider>
)

export default HelloWorld;
