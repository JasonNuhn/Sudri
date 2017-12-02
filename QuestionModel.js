const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
      },
      askQuestion: {
          type: String,
          required: true
      },
      tagLanguage: {
          type: String,
          required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }    
});

module.exports = mongoose.model("Question", QuestionSchema);