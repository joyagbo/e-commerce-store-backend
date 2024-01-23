const mongooose = require('mongoose');
const dotenv = require('dotenv').config()

const dbConnect = ()=>{
    try {
        const conn = mongooose.connect(process.env.MONGO_URI)
        console.log("Database connected") 
    } catch (error) {
        console.log('Database not connected')
    }

}
module.exports = dbConnect

  