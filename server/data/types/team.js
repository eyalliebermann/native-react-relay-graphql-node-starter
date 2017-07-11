import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

import {
    taskType
} from './task';

import {getTasks} from '../database';

export const teamType = new GraphQLObjectType({
    name: 'Team',
    description: 'A sub organization with its own tasks',
    fields: () => ({
        id: {
            type: GraphQLID,
            description: 'team unqiue identifier'
        },
        name: {
            type: GraphQLString,
            description: 'team name'
        },
        summary: {
            type: GraphQLString,
            description: 'summary about team roles'
        },
        tasks: {
            type: new GraphQLList(taskType),
            resolve: getTasks

        }
    })
});