import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
} from 'graphql';


module.exports = new GraphQLObjectType({
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
        }
    })
});