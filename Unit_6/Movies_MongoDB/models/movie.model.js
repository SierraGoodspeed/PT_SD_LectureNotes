/* 
  Challenge
    - Create a Schema called MovieSchema
    - Properties within:
        "title": string, required
        "genre": string
        "rating": string, required
        "length": number, required
        "releaseYear": number
        
    Note:
        Consider how the User model was created.
*/
// Require in mongoose
const mongoose = require("mongoose");

/* 
    Models are a structure to how we want our objects within our database to look.
        - This is our schema! 
        - Are referenced whenever we are handling data between the client-side and database.
*/

const MovieSchema = new mongoose.Schema({

    title: {
        type: String, 
        require: true, 
    },

    genre: {
        type: String,
        require: true
    }, 
    rating: {
        type: String,
        required: true,
        
    },
    length: {
        type: Number,
        required: true,
    },
    releaseYear:{
        type: Number
    }
});




module.exports = mongoose.model("Movie", MovieSchema);