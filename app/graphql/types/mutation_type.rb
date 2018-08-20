module Types
  class MutationType < GraphQL::Schema::Object
    field :addDog, mutation: Mutations::AddDog
  end
end
