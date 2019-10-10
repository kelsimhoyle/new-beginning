const graphql = require("graphql");
const { Post } = require("../models/index");


const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLSchema,
    GraphQLID,
    GraphQLList,
    GraphQLNonNull,
    GraphQLFloat
} = graphql;

const PostType = new GraphQLObjectType({
    name: "Post",
    // function so it can interact with other graphql objects
    fields: () => ({
        _id: { type: GraphQLID },
        title: { type: new GraphQLNonNull(GraphQLString) },
        text: { type: new GraphQLNonNull(GraphQLString) },
        postType: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: GraphQLString }
    })
});


// how to initially jump into the graph to get data
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        // the name of the field is how it will be refrenced in queries
        post: {
            type: PostType,
            args: { _id: { type: GraphQLString } },
            resolve(parent, args) {
                return Post.findById(args._id);
            }
        },
        posts: {
            type: PostType,
            args: { postType: { type: GraphQLString } },
            resolve(parent, args) {
                return Post.find({postType: args.postType});
            }
        }
    }
});

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addPost: {
            type: PostType,
            args: {
                title: { type: GraphQLString },
                text: { type: GraphQLString },
                postType: { type: GraphQLString },
            },
            resolve(parent, args) {
                // using the mongoose model
                let post = new Post({
                    title: args.title,
                    text: args.text,
                    postType: args.postType
                })
                
                return post.save()
            }
        }
    }
});


module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation: Mutation
});