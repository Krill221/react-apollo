import React from 'react';
import { Query, Mutation } from "react-apollo";
import { UPDATE_DOG } from "../queries";


export const Dog = ({updateDog, id,breed, isLiked}) => {

  let input_breed;
  let input_isLiked;

  return <div>
            {id} - {breed} {isLiked}
            <form
              onSubmit={e => {
                e.preventDefault();
                updateDog({ variables: { id,
                   breed: input_breed.value,
                  isLiked: input_isLiked.value}
                 });
                input_breed.value = "";
                }}
              >
              <input ref={node => {input_breed = node} }/>
              <input ref={node => {input_isLiked = node} }/>
              <button type="submit">Update Dog</button>
            </form>
    </div>
};
