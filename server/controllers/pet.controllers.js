const Pet = require('../models/pet.model')

const addPet = (req,res) => {
    Pet.create(req.body)
    .then((result) => {
        res.json(result)
    }).catch((err)=>{
        // res.json(err)        
        res.status(400).json(err)
        })
};
const findOnePet = (req,res) => {
    Pet.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err)=>{
        res.status(400).json(err)
    })
};
const findAllPet = (req,res) => {
    Pet.find()
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
};
const updatePet = (req,res) => {
    Pet.updateOne({_id:req.params.id}, req.body, {runValidators:true})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
};
const adoptPet = (req,res) => {
    Pet.deleteOne({_id:req.params.id})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        res.status(400).json(err)
    })
};


module.exports = {
    addPet,
    findOnePet,
    findAllPet,
    updatePet,
    adoptPet
}