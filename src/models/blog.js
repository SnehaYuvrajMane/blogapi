const mongoose = require("mongoose");




const blogSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true
  },
  Description: {
    type:String,
    required:true
},
  date: {
    type: Date,
    default: Date.now
  }
});

const Blog = new mongoose.model("Blogdetail", blogSchema);


module.exports = Blog;