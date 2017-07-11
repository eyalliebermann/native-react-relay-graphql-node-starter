import {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString
}
from 'graphql'

export const taskType = new GraphQLObjectType({
    name: 'Task',
    fields: () =>({
        id: {
            type: GraphQLID
        },
        name: {
            type: GraphQLString
        }
    })
});