const { ApolloServer, gql } = require('apollo-server-lambda')

const typeDefs = gql`
  type Cnm {
    time:Int
    reason:String
  }
  type Query {
    hello: String
    cnm:Cnm
  }
`

const resolvers = {
  Query: {
    hello: (root, args, context) => {
      return `6666${root}`
    },
    cnm:()=>{
      return {
        time:5,
        reason:"sa le ni ma"
      }
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers
})

exports.handler = server.createHandler()
