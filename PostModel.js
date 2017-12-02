const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    sUserID: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
      },
      reputation: {
          type: Number,
          required: true
      },   
});

const PostSchema = new mongoose.Schema({
    // sID: {
    //     type: Number,
    //     required: true
    // },
    // parentID: Number,
    // url: {
    //     type: String,
    //     required: true
    // },
    title: String,
    body: {
        type: String,
        required: true
    },
    // score: {
    //     type: Number,
    //     required: true
    // },
    languages: [String],
    // acceptedAnswerID: Number,
    // user: {
    //     sUserID: Number,
    //     name: String,
    //     reputation: Number,
    // }
})
module.exports = mongoose.model("Post", PostSchema);