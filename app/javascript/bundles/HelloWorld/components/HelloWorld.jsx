import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
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

  render() {
    return (
        <ApolloProvider client={client}>
          <AddDog />
          <Dogs onDogSelected={this.onDogSelected} />
          <DogPhoto breed={this.state.selectedDog} />
        </ApolloProvider>
      )
  }
}

export default HelloWorld;
