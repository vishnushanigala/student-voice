const express=require('express')
const routes=express.Router()

const {
    getComplaints,
    addComplaint,
    deleteComplaint
}=require('../controllers/complaint.controller')

routes.post('/savecomplaint',addComplaint)
routes.get('/complaints',getComplaints)
routes.delete('/:id',deleteComplaint)

module.exports=routes