const express = require('express');
const router = express.Router();
const jobController = require('../controllers/jobController');

// Create a job
router.post("/create", jobController.createJob);

// Update a job by ID
router.put("/:id", jobController.updateJob);

// Delete a job by ID
router.delete("/:id", jobController.deleteJob);

// Get a single job by ID
router.get("/:id", jobController.getJob);

module.exports = router;
