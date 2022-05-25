const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    category: { type: String, required: true },
    urgency: { type: String, required: true },
    priority: { type: String, required: true },
    caller: { type: String, required: true },
    smallDescription: { type: String, required: true },
    fullDescription: { type: String, required: true },
    impact: { type: String, required: true },
    service: { type: String, required: true },
    company: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    companyDescription: { type: String, required: true },
    appliedCandidates: { type: [], required: true },
    postedBy: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const jobModel = new mongoose.model("jobs", jobSchema);
module.exports = jobModel;
