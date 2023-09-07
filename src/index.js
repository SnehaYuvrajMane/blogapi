const express = require("express");
require("./db/conn");
const Blog = require("./models/blog");
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const port = process.env.PORT || 3000;

//create a new blog
app.post("/blog", async (req, res) => {
  try {
    console.log(req.body);
    const blogdetail = new Blog(req.body);
    const data = await blogdetail.save();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// for read blog data

app.get("/getblog", async (req, res) => {
  try {
    const data = await Blog.find();
    res.json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

//for update the data

app.put("/getblog/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const updateBlog = await Blog.findByIdAndUpdate(_id, req.body,{
      new : true
    });
  
  
  } catch (e) {
    res.send(400).send(updateBlog);
  }
});

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
