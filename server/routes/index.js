var express = require('express');
var expressGraphQL = require('express-graphql').graphqlHTTP;
var { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
var router = express.Router();

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'helloworld',
    fields: ()=> ({
      message: { 
        type: GraphQLString,
        resolve: () => "Hello World"
      }
    })
  })
})


/* GET home page. */
router.get('/', function(req, res, next) {
  
});

router.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true,
}) )

module.exports = router;
