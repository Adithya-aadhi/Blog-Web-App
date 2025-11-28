import express from "express";

const app=express()
const PORT=3000

app.use(express.json())
app.use(express.static("public"))
app.use(express.urlencoded({extended:true}))

const blog_posts=[];
app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.get('/posts',(req,res)=>{
    console.log(blog_posts)
    res.render("posts.ejs",{blog_posts})
})
app.post('/add',(req,res)=>{
    const data=req.body
    blog_posts.push(data)
    res.render("index.ejs")
})
app.get('/delete/:index', (req, res) => {
    const index = req.params.index;
    if (blog_posts[index]) {
        blog_posts.splice(index, 1);
    }
    res.redirect('/posts');
});

app.listen(PORT,()=>{
    console.log(`listening on port ${PORT}`)
})