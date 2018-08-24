import React from 'react';
import { Query, Mutation } from "react-apollo";
import { UPDATE_DOG, TOGGLE_DOG } from "../queries";


export const Dog = ({id,breed, isLiked}) => {

  let input_breed;
  let input_isLiked;

  return <div key={id}>
    <Mutation mutation={UPDATE_DOG}>
      {(updateDog, { loading, error }) => (
        <div>
            {id} - {breed} {isLiked}
            <form
              onSubmit={e => {
                e.preventDefault();
                updateDog({ variables: { id, breed: input_breed.value, isLiked: input_isLiked.value} });
                input_breed.value = "";
                input_isLiked.value = "";
                }}
              >
                <input ref={node => {input_breed = node} }/>
                <input ref={node => {input_isLiked = node} }/>
                <button type="submit">Update Dog</button>
            </form>

            {loading && <p>Loading...</p>}
            {error && <p>Error :( Please try again</p>}
        </div>
      )}
    </Mutation>

  </div>
};
