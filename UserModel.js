const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
      },
      email: {
          type: String,
          required: true
      },
      displayName: {
          type: String,
          required: true
      },
      city: {
          type: String,
          required: false
      },
      state: {
          type: String,
          required: false
      },
      createdAt: {
        type: Date,
        default: Date.now
      }    
});

module.exports = mongoose.model("User", UserSchema);