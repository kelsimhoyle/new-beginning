const { Post } = require("../models/index");

 const resolvers = {
  Query: {
    post: (_, {_id}) => Post.findById(_id),
    posts: (_, {postType}) => Post.find({postType: postType})
  },
  Mutation: {
    createPost: async (_, { title, text, postType }) => {
      const post = new Post({ title, text, postType });
      await post.save();
      return post;
    }
  }
};

module.exports = resolvers;