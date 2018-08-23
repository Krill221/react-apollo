export const defaults = {
  dog: {
    __typename: "[Dog]",
    isLiked: "DA"
  }
};

const resolvers = {
  dog: {
    isLiked: () => "DA"
  }
};

export default resolvers
