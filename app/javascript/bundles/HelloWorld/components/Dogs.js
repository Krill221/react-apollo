import React from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import DogPhoto from "./DogPhoto"

const GET_DOGS = gql`
  {
    dogs {
      id
      breed
    }
  }
`;

const Dogs = ({ onDogSelected }) => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return "Loading...";
      if (error) return `Error! ${error.message}`;

      return (
        <ul name="dog" onChange={onDogSelected}>
          {data.dogs.map(dog => (
            <li key={dog.id}>
              {dog.breed}
              <DogPhoto breed={dog.breed} />
            </li>
          ))}
        </ul>
      );
    }}
  </Query>
);

export default Dogs
