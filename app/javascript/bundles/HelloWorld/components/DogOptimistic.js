import React from 'react';
import { Query, Mutation } from "react-apollo";
import { UPDATE_DOG } from "../queries";
import { Dog } from "./Dog";


export const DogOptimistic = (dog) => {

  let input_breed;
  let input_isLiked;

  return <div key={dog.id}>
    <Mutation mutation={UPDATE_DOG}>
    {mutate => (
      <Dog {...dog}
        updateDog={
          ( {variables} ) => {
            return mutate({
              variables: variables,
              optimisticResponse: {
                __typename: "Mutation",
                updateDog: {
                  dog: {
                    id: variables.id,
                    breed: variables.breed,
                    displayimage: 'empty',
                    __typename: "Dog"
                  },
                  __typename: "UpdateDogPayload"
                }
              }
            })
          }
        }
      />
    )}
    </Mutation>
  </div>
};
