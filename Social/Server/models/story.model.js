import mongoose from "mongoose";

const storySchema = new mongoose.Schema(
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

        viewers: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "user",
                required: true,
            }
        ],
        createdAt:{
            type:Date,
            default: Date.now(),
            expires: 86400,
        }
    },
    { timestamps: true }
);

const Story = mongoose.model("Story", postSchema);

export default Story;
