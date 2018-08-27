import gql from "graphql-tag"

export const defaults = {
  isLiked: "none"
};


export const resolvers = {
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
