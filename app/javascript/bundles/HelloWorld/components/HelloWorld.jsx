import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
import SimpleDogs from "./SimpleDogs"
import { defaults, resolvers } from "../local_resolvers";




const client = new ApolloClient({
  uri: "http://0.0.0.0:3000/graphql",
  clientState: {
    defaults: defaults,
    resolvers: resolvers
  }
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
          <SimpleDogs />
        </ApolloProvider>
      )
  }
}

export default HelloWorld;
