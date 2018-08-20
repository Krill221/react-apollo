import gql from "graphql-tag";


export const ADD_TODO = gql`
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
    }
  }
`;
