import React from 'react';
import { Query } from "react-apollo";
import gql from "graphql-tag";

const CORRENCY = gql`
  {
    rates(currency: "USD") {
      currency
      rate
    }
  }`

const ExchangeRates = () => (
  <Query query={CORRENCY}>
    {
      ({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.rates.map(({ currency, rate }) => (
        <div key={currency}>
          <p>{`${currency}: ${rate}`}</p>
        </div>
      ));
    }
  }
  </Query>
)

export default ExchangeRates
