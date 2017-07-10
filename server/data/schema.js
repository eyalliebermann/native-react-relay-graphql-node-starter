/*
example query:
{
  currentTeam{
    id
    tasks{
      edges{
        node{
          id
          name
      }
      node{
        id
        name
      }
      }
    }
  }
}

example answer:
{
  "data": {
    "currentTeam": {
      "id": "VGVhbTox",
      "tasks": {
        "edges": [
          {
            "node": {
              "id": "VGFzazow",
              "name": "Answer the phone"
            }
          },
          {
            "node": {
              "id": "VGFzazox",
              "name": "Wash the dishes"
            }
          },
          {
            "node": {
              "id": "VGFzazoy",
              "name": "Throw up a holiday dinner"
            }
          }
        ]
      }
    }
  }
}
*/

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
  connectionArgs,
  connectionDefinitions,
  connectionFromArray,
  fromGlobalId,
  globalIdField,
  mutationWithClientMutationId,
  nodeDefinitions,
} from 'graphql-relay';

import {
  // Import methods that your schema can use to interact with your database
  Team,
  Task,
  getTeam,
  getCurrentTeam,
  getTask,
  getTasks,
} from './database';

/**
 * We get the node interface and field from the Relay library.
 *
 * The first method defines the way we resolve an ID to its object.
 * The second defines the way we resolve an object to its GraphQL type.
 */
var {nodeInterface, nodeField} = nodeDefinitions(
  (globalId) => {
    var {type, id} = fromGlobalId(globalId);
    if (type === 'Team') {
      return getTeam(id);
    } else if (type === 'Task') {
      return getTask(id);
    } else {
      return null;
    }
  },
  (obj) => {
    if (obj instanceof Team) {
      return teamType;
    } else if (obj instanceof Task)  {
      return taskType;
    } else {
      return null;
    }
  }
);

/**
 * Define your own types here
 */

var teamType = new GraphQLObjectType({
  name: 'Team',
  description: 'A sub organization with its own tasks',
  fields: () => ({
    id: globalIdField('Team'),
    tasks: {
      type: taskConnection,
      description: 'A team\'s collection of tasks',
      args: connectionArgs,
      resolve: (_, args) => connectionFromArray(getTasks(), args),
    },
  }),
  interfaces: [nodeInterface],
});

var taskType = new GraphQLObjectType({
  name: 'Task',
  description: 'A shiny task',
  fields: () => ({
    id: globalIdField('Task'),
    name: {
      type: GraphQLString,
      description: 'The name of the task',
    },
  }),
  interfaces: [nodeInterface],
});

/**
 * Define your own connection types here
 */
var {connectionType: taskConnection} =
  connectionDefinitions({name: 'Task', nodeType: taskType});

/**
 * This is the type that will be the root of our query,
 * and the entry point into our schema.
 */
var queryType = new GraphQLObjectType({
  name: 'Query',
  fields: () => ({
    node: nodeField,
    // Add your own root fields here
    currentTeam: {
      type: teamType,
      resolve: () => getCurrentTeam(),
    },
  }),
});

/**
 * This is the type that will be the root of our mutations,
 * and the entry point into performing writes in our schema.
 */
var mutationType = new GraphQLObjectType({
  name: 'Mutation',
  fields: () => ({
    // Add your own mutations here
  })
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
