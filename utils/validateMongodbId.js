const mongoose = require('mongoose')
const mongodbIdValid = (id) =>{
    const isValid = mongoose.Types.ObjectId.isValid(id)
    if(!isValid) throw new Error("This is not a valid ID")
};
module.exports = mongodbIdValid