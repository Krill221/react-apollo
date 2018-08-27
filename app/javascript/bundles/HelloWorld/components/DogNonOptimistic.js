import React from 'react';
import { Query, Mutation } from "react-apollo";
import { UPDATE_DOG } from "../queries";
import { Dog } from "./Dog";


export const DogNonOptimistic = (dog) => {

  let input_breed;
  let input_isLiked;

  return <div key={dog.id}>
    <Mutation mutation={UPDATE_DOG}>
      {(updateDog, { loading, error }) => (
        <div>
        {loading && <div>Loading...</div>}
        {error && <div>Error :( Please try again</div>}

        <Dog updateDog={updateDog} {...dog}/>
        </div>
      )}
    </Mutation>
  </div>
};
