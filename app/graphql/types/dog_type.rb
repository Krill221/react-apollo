
Types::DogType = GraphQL::ObjectType.define do

  name 'Dog'

  field :id, !types.ID
  field :breed, !types.String
  field :displayImage, !types.String

end
