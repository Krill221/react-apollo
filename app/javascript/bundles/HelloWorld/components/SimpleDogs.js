import React from 'react';
import { Query, Mutation } from "react-apollo";
import { GET_DOGS } from "../queries";
import { Dogs } from "./Dogs";



const SimpleDogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <Dogs dogs={data.dogs || []}

       />
    }}
  </Query>
);

export default SimpleDogs
