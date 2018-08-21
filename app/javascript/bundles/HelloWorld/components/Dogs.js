import React from 'react';
import { Query, Mutation } from "react-apollo";
import { GET_DOGS, UPDATE_DOG } from "../queries";


const Dogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.dogs.map(({ id, breed, displayimage }) => {
        let input_breed;
        let input_displayimage;

        return (
          <Mutation mutation={UPDATE_DOG} key={id}>
            {(updateDog, { loading, error }) => (
              <div>
                <p>{id}</p>
                <p>{breed}</p>
                <p>{displayimage}</p>
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    updateDog({ variables: { id, breed: input_breed.value, displayimage: input_displayimage.value } });

                    input_breed.value = "";
                    input_displayimage.value = "";
                  }}
                >
                  <input
                    ref={node => {
                      input_breed = node;
                    }}
                  />
                  <input
                    ref={node => {
                      input_displayimage = node;
                    }}
                  />
                <button type="submit">Update Dog</button>
                </form>
                {loading && <p>Loading...</p>}
                {error && <p>Error :( Please try again</p>}
              </div>
            )}
          </Mutation>
        );
      });
    }}
  </Query>
);

export default Dogs
