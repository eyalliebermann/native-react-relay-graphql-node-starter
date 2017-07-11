import {
  GraphQLBoolean,
  GraphQLFloat,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
} from 'graphql';

import {
  // Import methods that your schema can use to interact with your database
  Team,
  Task,
  getTeam,
  getCurrentTeam,
  getTask,
  getTasks,
} from './database';

//My types

const teamType = new GraphQLObjectType({
  name: 'Team',
  description: 'A sub organization with its own tasks',
  fields: () => ({
    id: {
      type:GraphQLID,
      description:'team unqiue identifier'
    },
     name: {
      type:GraphQLString,
      description:'team name'
    },
    summary: {
      type:GraphQLString,
      description:'summary about team roles'
    }
  })
});


/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
const queryType = new GraphQLObjectType({
  name: 'Query',
  fields: {
    // Add your own root fields here
    myTeam: {
      type: teamType,
      description:'The team of which I am member',
      resolve: () => ( {
          id: '1',
          name: 'IT',
          summary: 'The team that does this'
        })
      },
    },
});



/**
 * Finally, we construct our schema (whose starting query type is the query
 * type we defined above) and export it.
 */
export var Schema = new GraphQLSchema({
  query: queryType,
  // Uncomment the following after adding some mutation fields:
  // mutation: mutationType
});