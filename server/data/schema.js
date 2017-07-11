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

//const teamType = require( './types/team');
import {teamType} from './types/team';

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
      resolve: getCurrentTeam
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