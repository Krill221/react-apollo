module Types
  class MutationType < GraphQL::Schema::Object
    field :addDog, mutation: Mutations::AddDog
    field :updateDog, mutation: Mutations::UpdateDog
  end
end
