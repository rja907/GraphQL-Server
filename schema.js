const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// Hardcoded data
const customers = [
  { id: '1', name: 'John Doe', email: 'a@a.com', age: 35 },
  { id: '1', name: 'Jack Doe', email: 'b@a.com', age: 5 },
  { id: '1', name: 'Joe Doe', email: 'c@a.com', age: 15 }
];

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
});

// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  customer: {
    type: CustomerType,
    args: {
      id: { GraphQLString }
    },
    resolve(parentValue, args) {
      for (let i = 0; i < customers.length; i++) {
        if (customers[i].id === args.id) {
          return customers[i];
        }
      }
    }
  }
});

module.exports = new GraphQLSchema({});
