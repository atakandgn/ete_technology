const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  name: { type: String, required: true },
  legalNumber: { type: String, required: true },
  country: { type: String, required: true },
  website: { type: String, required: true },
}, { timestamps: true }); 

// Create and export Company model
const Company = mongoose.model('Company', companySchema);

module.exports = Company;
