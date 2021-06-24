
exports.getPosts = (req, res)=>{
    res.status(200).json({
        "post": [{
            _id: "1",
            title: "abcde",
            content: "abcdefghi",
            creator: {
                name: 'Vaibhav'
            },
            date: new Date()
        }]
    })    
}


exports.createPost = (req,res) => {
    const title = req.body.title;
    const content  = req.body.content;

    res.status(201).json({
        message: 'Post created successfully',
        post: {
            id: new Date(),
            title: title,
            content: content
        }
    })
}