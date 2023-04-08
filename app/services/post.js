const Post = require("../models/core/Post");


module.exports = {
    createNewPost: async (data) => {
        try {
            const saveData = {
                ...data
            };

            const newPost = new Post(saveData);
            const result = await newPost.save();

            return result;
        } catch (error) {
            console.log(error);
            return error;
        }
    },
    getUserAllPost: async (query, filter = {}) => {
        return await Post.find(query, filter).populate('user');;
    },
    getUserPostById: async (query) => {
        return await Post.find(query).populate('user');
    },
    updatePost: async (filter, update) => {
        let res = await Post.findOneAndUpdate(filter, update, { new: true });
        return res;
    },

    deletePost: async (query) => {
        return await Post.findByIdAndDelete(query);
    },

};