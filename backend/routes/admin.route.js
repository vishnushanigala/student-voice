const express=require('express')
const routes=express.Router()

const {
    getUserComplaints,
    updateStatusComplaint,
}=require('../controllers/complaint.controller')


routes.get('/complaints',getUserComplaints)
routes.patch('/:userid/:nature',updateStatusComplaint)

module.exports=routes