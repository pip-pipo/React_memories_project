// all posts functions
import mongoose from 'mongoose';
const postschema = mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags: [String],
    selectedFiels: String,
    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },

});
const PostMessage = mongoose.model('PostMessage', postschema);
export default PostMessage;