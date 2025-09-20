import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        // author
        author: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "user",
            required: true,
        },

        // caption
        caption: {
            type: String,
            default: "",
        },

        // content - image , video
        mediaType: {
            type: String,
            enum: ["image", "video"],
            required: true,
        },

        mediaUrl: {
            type: String,
            required: true,
        },

        // likes
        likes: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
            },
        ],

        //  comments
        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "user",
                },
                text: {
                    type: String,
                    required: true,
                },

                createdAt: {
                    type: Date,
                    default: Date.now(),
                }
            },
        ],
    },
    { timestamps: true }
);

const Post = mongoose.model("post", postSchema);

export default Post;
