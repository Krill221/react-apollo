
module Mutations
  class AddDog < GraphQL::Schema::RelayClassicMutation

     # TODO: define return fields
     #field :dog, Types::DogType, null: false
     field :id, ID, null: false
     field :breed, String, null: false
     field :displayimage, String, null: false


     # TODO: define arguments
     argument :breed, String, required: true
     argument :displayimage, String, required: true

     def resolve(breed:, displayimage:)
       dog = Dog.create!(breed: breed, displayimage: displayimage)
       { id: dog.id, breed: dog.breed, displayimage: dog.displayimage }
     end
  end
end
