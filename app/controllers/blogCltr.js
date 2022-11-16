const Blog=require('../models/blogs')

const blogController={}

blogController.list=((req,res)=>{
    Blog.find()
    .then((blogs)=>{
        res.json(blogs)
    })
    .catch((err)=>{
        res.json(err)
    })
})

blogController.create=((req,res)=>{
    const body=req.body
    const blogs=new Blog(body)
    blogs.save()
    .then((blog)=>{
        res.json(blog)
    })
    .catch((err)=>{
        res.json(err)
    })
})

blogController.show=((req,res)=>{
    const id=req.params.id
    Blog.findById(id)
    .then((blog)=>{
        res.json(blog)
    })
    .catch((err)=>{
        res.json(err)
    })
})

blogController.update=((req,res)=>{
    const id=req.params.id
    const body=req.body
    Blog.findByIdAndUpdate(id,body,{new:true,runValidators:true})
    .then((blog)=>{
        res.json(blog)
    })
    .catch((err)=>{
        res.json(err)
    })
})

blogController.remove=((req,res)=>{
    const id=req.params.id
    Blog.findByIdAndDelete(id)
    .then((blog)=>{
        res.json(blog)
    })
    .catch((err)=>{
        res.json(err)
    })
})

module.exports=blogController