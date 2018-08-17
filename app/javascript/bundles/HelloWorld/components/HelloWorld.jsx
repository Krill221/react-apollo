import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"

import ExchangeRates from "./ExchangeRates"



const client = new ApolloClient({
  uri: "https://w5xlvm3vzz.lp.gql.zone/graphql"
});


const HelloWorld = () => (
  <ApolloProvider client={client}>
      <ExchangeRates />
  </ApolloProvider>
)

export default HelloWorld;
