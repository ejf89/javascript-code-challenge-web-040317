$(document).ready(function(){
    // $("#textBox").val()
    $("#submitButton").on('click', function(e){
        e.preventDefault()

        var boxText = $("#textBox").val()
        var comment = new Comment(boxText)
        $("#comment-list").append(comment.render())
        $("#textBox").val('')

        //  a new comment text should appear in the div with the id of "comments". <--- "comment-list"??

    })
})
