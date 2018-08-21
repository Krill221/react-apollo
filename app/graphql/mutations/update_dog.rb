
module Mutations
  class UpdateDog < GraphQL::Schema::RelayClassicMutation

     # TODO: define return fields
     field :dog, Types::DogType, null: false
     #field :id, ID, null: false
     #field :breed, String, null: false
     #field :displayimage, String, null: false


     # TODO: define arguments
     argument :id, String, required: true
     argument :breed, String, required: true
     argument :displayimage, String, required: true

     def resolve(id:, breed:, displayimage:)
       dog = Dog.update(id, breed: breed, displayimage: displayimage)
       { dog: dog }
     end
  end
end
