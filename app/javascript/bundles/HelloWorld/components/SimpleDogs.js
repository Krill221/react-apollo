import React from 'react';
import { Query, Mutation } from "react-apollo";
import { GET_DOGS } from "../queries";
import { Dog } from "./Dog";



const SimpleDogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return <div>
        {data.dogs.map( (dog) => (
          <Dog key={dog.id} {...dog} />
        ))}
      </div>
    }}
  </Query>
);

export default SimpleDogs
