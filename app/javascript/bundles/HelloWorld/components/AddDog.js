import React from 'react';
import { Mutation } from "react-apollo";
import { ADD_DOG, GET_DOGS, GET_DOG_PHOTO } from "../queries";


const AddDog = () => {
  let input_breed;
  let input_display_mage;

  return (
    <Mutation
      mutation={ADD_DOG}
      update={(cache, { data: { addDog } }) => {
        const { dogs } = cache.readQuery({ query: GET_DOGS });
        cache.writeQuery({
          query: GET_DOGS,
          data: { dogs: dogs.concat([addDog]) }
        });
      }}
    >
      {addDog => (
        <div>

          <form
            onSubmit={e => {
              e.preventDefault();
              addDog({ variables: { breed: input_breed.value, displayimage: input_display_mage.value } });
            }}
          >

            <input
              ref={node => {
                input_breed = node;
              }}
            />

            <input
              ref={node => {
                input_display_mage = node;
              }}
            />

            <button type="submit">Add Todo</button>
          </form>
        </div>
      )}
    </Mutation>
  );
};

export default AddDog
