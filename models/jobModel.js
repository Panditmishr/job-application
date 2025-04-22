const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
   
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    }
}, { timestamps: true }); // adds createdAt & updatedAt

const jobModel = mongoose.model('Job', jobSchema);

module.exports = jobModel;
