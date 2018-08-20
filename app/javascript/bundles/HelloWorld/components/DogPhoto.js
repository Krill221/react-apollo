import React from 'react';
import { Query } from "react-apollo";
import { ADD_TODO, GET_DOGS, GET_DOG_PHOTO } from "../queries";


const DogPhoto = ({ breed }) => (
  <Query
    query={GET_DOG_PHOTO}
    variables={{ breed }}
    skip={!breed}
    pollInterval={50000}
  >
    {({ loading, error, data, refetch, networkStatus }) => {
      if (networkStatus === 4) return "Refetching!";
      if (loading) return null;
      if (error) return `Error!: ${error}`;

      return (
        <div>
          <img src={data.dog.displayimage} style={{ height: 100, width: 100 }} />
          <button onClick={() => refetch()}>Refetch!</button>
        </div>
      );
    }}
  </Query>
);

export default DogPhoto
