const mongoose = require("mongoose");

const LanguageSchema = new mongoose.Schema({
    UserId: {
        type: String,
        required: true
    },
    tagLanguage: {
        type: String,
        required: true
      },
      country: {
          type: String,
          required: true
      },
      createdAt: {
        type: Date,
        default: Date.now
      }    
});

module.exports = mongoose.model("Language", LanguageSchema);