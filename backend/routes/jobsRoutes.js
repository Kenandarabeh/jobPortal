const express = require('express');
const router = express.Router();
const { createJob, singleJob, updateJob, showJobs, deleteJob } = require('../controllers/jobsController');
const { isAuthenticated, isAdmin } = require('../middleware/auth');

// Jobs routes

// POST /api/job/create
router.post('/job/create', createJob);

// GET /api/job/:id
router.get('/job/:id', singleJob);

// PUT /api/job/update/:job_id
router.put('/job/update/:job_id', isAdmin, updateJob);

// GET /api/jobs/show
router.get('/jobs/show', showJobs);

// DELETE /api/job/delete/:job_id
router.delete('/job/delete/:job_id',deleteJob);

module.exports = router;
