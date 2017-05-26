class CommentList{
    constructor(){
        this.comments = []
    }

    addComment(string){
        var newComment = new Comment(string)
        this.comments.push(newComment)
    }

    //change to reduce??
    render(){
        let ul = `<ul>`
        this.comments.map( function(comment){
            ul += comment.render()
        } )
        debugger
        return ul + `</ul>`
    }
}
