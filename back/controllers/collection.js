const granjaModel = require('../model/collection')

const getGranja = async()=>{
    return granjaModel.find({})
}

const getByIDGranja = async(_id) =>{
     return granjaModel.findOne({_id})
 }

const createGranja = async(body) =>{
const newGranja = new granjaModel(body)
await newGranja.save()
return newGranja
}

const updateGranja = async(_id, updateObject) =>{
    return granjaModel.findOneAndUpdate({_id}, updateObject,{
        upsert: false, 
        new: true
    })
}

const removeGranja = async(_id) =>{
    return granjaModel.findByIdAndDelete({_id})
}

module.exports = {
    getGranja,
   getByIDGranja,
    createGranja,
    updateGranja,
    removeGranja
}