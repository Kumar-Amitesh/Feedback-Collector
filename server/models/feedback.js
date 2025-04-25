//Feedback model for storing user feedback in the database
// This model uses Mongoose to define the schema for the feedback collection
import mongoose from 'mongoose';

const FeedbackSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  }
});

export default mongoose.model('Feedback', FeedbackSchema);