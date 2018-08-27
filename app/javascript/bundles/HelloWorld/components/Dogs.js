import React from 'react';
import { DogOptimistic } from "./DogOptimistic";
import { DogNonOptimistic } from "./DogNonOptimistic";


export const Dogs = ({dogs}) => {
  return <div>
    {dogs.map( (dog) => (
      <DogOptimistic key={dog.id} {...dog} />
    ))}
  </div>
};
