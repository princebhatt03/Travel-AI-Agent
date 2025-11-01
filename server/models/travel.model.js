const mongoose = require('mongoose');

const travelSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    destination: { type: String, required: true },
    startDate: { type: String, required: true },
    endDate: { type: String, required: true },
    budget: { type: Number, required: true },
    interests: { type: String, required: true },
    plan: { type: String }, // AI-generated travel plan
  },
  { timestamps: true }
);

module.exports = mongoose.model('Travel', travelSchema);
