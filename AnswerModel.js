const mongoose = require("mongoose");

const AnswerSchema = new mongoose.Schema({
    questionId: {
        type: String,
        required: true
    },
    userId: {
        type: String,
        required: true
      },
      answerTextField: {
          type: String,
          required: true
      },
      answerSubmitVideo: {
          type: String,
          required: false
      },
      submitLink: {
          type: String,
          required: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }    
});

module.exports = mongoose.model("Answer", AnswerSchema);