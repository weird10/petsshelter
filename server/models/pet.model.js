const mongoose=require('mongoose')

const PetSchema =  new mongoose.Schema({
    name :{ 
        type:String,
        required:[true, "Name is required"],
        minLength:[2, "Must be at least 2 characters!"],
        maxLength:[20, "Must be less than 20 characters!"]
    },
    type: {
        type:String,
        required:[true, "Type is required"],
        minLength:[3, "Must be at least 2 characters!"],
        maxLength:[20, "Must be less than 20 characters!"]

    },
    description: {
        type:String,
        required:[true, "Description is required"],
        minLength:[2, "Must be at least 2 characters!"],
    },
    
    skill1: {
        type:String
    },

    skill2: {
        type:String
    },
    skill3: {
        type:String
    },
},
    
    
{timestamps:true})

const Pet = mongoose.model('Pet',PetSchema)

module.exports = Pet
