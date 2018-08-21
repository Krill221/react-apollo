import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
import DogsSelect from "./DogsSelect"
import Dogs from "./Dogs"
import DogPhoto from "./DogPhoto"
import AddDog from "./AddDog"




const client = new ApolloClient({
  uri: "http://0.0.0.0:3000/graphql"
});


class HelloWorld extends React.Component {
  state = { selectedDog: null };

  onDogSelected = ({ target }) => {
    this.setState(() => ({ selectedDog: target.value }));
  };

  //<DogsSelect onDogSelected={this.onDogSelected} />
  //<DogPhoto breed={this.state.selectedDog} />

  render() {
    return (
        <ApolloProvider client={client}>
          <AddDog />
          <hr />
          <Dogs />
        </ApolloProvider>
      )
  }
}

export default HelloWorld;
