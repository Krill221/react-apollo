import gql from "graphql-tag";


export const UPDATE_DOG_WITH_CLIENT_CASH = gql`
  mutation updateDog($id: String!,
     $breed: String!,
     $displayimage: String = "empty",
    ) {
      toggleDog(id: $id, isLiked: $isLiked) @client
      updateDog(input: {id: $id,
         breed: $breed,
          displayimage: $displayimage
        }){
        dog {
          id
          breed
          displayimage
        }
    }
  }
  `;

export const UPDATE_DOG = gql`
    mutation updateDog($id: String!,
       $breed: String!,
       $displayimage: String = "empty",
      ) {
        updateDog(input: {id: $id,
           breed: $breed,
            displayimage: $displayimage
          }){
          dog {
            id
            breed
            displayimage
          }
      }
}
`;

export const ADD_DOG = gql`
  mutation addDog($breed: String!, $displayimage: String!) {
    addDog(input: {breed: $breed, displayimage: $displayimage}){
      id
      breed
      displayimage
    }
  }
`;


export const GET_DOG_PHOTO = gql`
  query Dog($breed: String!) {
    dog(breed: $breed) {
      id
      displayimage
    }
  }
`;


export const GET_DOGS = gql`
  {
    dogs {
      id
      breed
      displayimage
      isLiked @client
    }
  }
`;
