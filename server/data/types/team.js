import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList
} from 'graphql';

import {
    taskType
} from './task';

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
            resolve: () => ([{
                id: 'sdfsdf',
                name: 'sdgsdfgsdg',
                summary: 'dsg dfgsd sdfgsdfg sdfgsdg'
            }, {
                id: 'werwer',
                name: 'wqerqwerwrewre',
                summary: 'ytry ertert wtrwetb uu'
            }])

        }
    })
});