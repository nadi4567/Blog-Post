//jshint esversion:6
require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require('mongoose');
// connect to mongodb server named bolgDB
const password = process.env.MONGODB_PASSWORD;
mongoose.connect(`mongodb+srv://Nadi78:${password}@cluster0.jkndiqj.mongodb.net/blogDB`, {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});
// create a post Schema
const postSchema = {
  title:{
    type:String,
    required:[true,"Please include a title"]
  },
  content:String
};
// let's create a Post model 
const Post = mongoose.model("Post",postSchema);


const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "We created this to upload post whatever you like.If you want to uplod about health , put the title about Health and write everything corresponding to the title you put in the content box."
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/",(req,res)=>{
  Post.find({}).then(posts=>{
    console.log(posts)
    res.render("home",{
      startingContent:homeStartingContent,
      posts:posts
      });
  })
   
   // console.log(contentData)
});
app.get("/about",(req,res)=>{
  res.render("about",{about : aboutContent})
});
app.get("/contact",(req,res)=>{
  res.render("contact.ejs",{contact : contactContent} )
})
// going to compose page inorderto post new post
app.get("/compose",(req,res)=>{
  res.render("compose");
  
});


app.post("/compose", (req, res) => {
  
  const post = new Post({
    title:req.body.title,
    content : req.body.Paragraph
  });
  post.save().then(()=>{
    res.redirect("/");
  }).catch(err=>{
    console.log(err.message);
    res.sendStatus(err.message)
  })
  
  
   
  // Instead of redirecting here, render the home page with the updated data
  
});

app.get("/posts/:postId",(req,res)=>{
     const postID = req.params.postId;
     // checking if postId and content's title's id
     //const post = contentData.find(data=> data.id === Number(postID));// this hold post object if matched
     Post.findOne({_id:postID}).then(posts=>{
       
       res.render("post",{
        title:posts.title,
        paragraph:posts.content
      })
     }).catch(err=>{
      console.error(err.message)
     })
     // if match , post will be object of post
     
   
     
});


const port =  process.env.PORT || 3000;
app.listen(port,  (err)=> {
  if (err) console.log(err);
  console.log(`Server listening on PORT ${port} `);
});











