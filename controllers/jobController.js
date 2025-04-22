const jobModel = require('../models/jobModel');
const mongoose = require('mongoose');

// Create Job
const createJob = async (req, res) => {
    try {
        const { title, description, salary, location, company } = req.body;
        const newJob = await jobModel.create({ title, description, salary, location, company });
        res.status(201).json({ success: true, data: newJob });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Update Job
const updateJob = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Job ID' });
        }

        const updatedJob = await jobModel.findByIdAndUpdate(
            id,
            req.body,
            { new: true, runValidators: true }
        );

        if (!updatedJob) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({ success: true, data: updatedJob });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Delete Job
const deleteJob = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Job ID' });
        }

        const deletedJob = await jobModel.findByIdAndDelete(id);

        if (!deletedJob) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({ success: true, data: deletedJob });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// Get Single Job
const getJob = async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid Job ID' });
        }

        const job = await jobModel.findById(id);

        if (!job) {
            return res.status(404).json({ success: false, message: 'Job not found' });
        }

        res.status(200).json({ success: true, data: job });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = {
    createJob,
    updateJob,
    deleteJob,
    getJob
};
