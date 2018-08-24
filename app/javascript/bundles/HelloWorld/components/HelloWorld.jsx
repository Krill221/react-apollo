import React from 'react';
import { ApolloProvider } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag"
import SimpleDogs from "./SimpleDogs"

export const typeDefs = `

`;


const defaults = {
  isLiked: "SAA"
};


const resolvers = {
  Mutation: {
    toggleDog: (_, variables, { cache, getCacheKey }) => {
        const id = getCacheKey({ __typename: 'Dog', id: variables.id })
        const fragment = gql`
          fragment currentDog on Dog {
            isLiked
          }
        `;
        const dog = cache.readFragment({ fragment, id })
        const data = { ...dog, isLiked: variables.isLiked };
        cache.writeData({ id, data });
        return null;
    }
  }
};



const client = new ApolloClient({
  uri: "http://0.0.0.0:3000/graphql",
  clientState: {
    defaults: defaults,
    resolvers: resolvers,
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
