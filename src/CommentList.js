class CommentList{
    constructor(){
        this.comments = []
    }

    addComment(string){
        var newComment = new Comment(string)
        this.comments.push(newComment)
    }

    render(){
        var elements = this.comments.map(function(com){ return com.render()})
        return  `<ul>${elements.join('')}</ul>`
    }
}
