Types::QueryType = GraphQL::ObjectType.define do
  name 'Query'

  field :dogs, !types[Types::DogType] do
    sleep 1.5
    resolve -> (obj, args, ctx) { Dog.all }
  end

  field :dog, Types::DogType do
    argument :breed, !types.String
    resolve -> (obj, args, ctx) {
       Dog.where(:breed => args[:breed]).first
    }
  end

end
