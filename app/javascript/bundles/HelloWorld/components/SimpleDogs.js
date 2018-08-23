import React from 'react';
import { Query, Mutation } from "react-apollo";
import { GET_DOGS, UPDATE_DOG } from "../queries";


const SimpleDogs = () => (
  <Query query={GET_DOGS}>
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;


      console.log(data);
      return <div>
        {data.dogs.map( (dog) => ( <div key={dog.id} >
                  <p>{dog.id} {dog.breed} -{dog.isLiked}-</p>
                  <hr />
            </div>
          ))}
      </div>
    }}
  </Query>
);

export default SimpleDogs
