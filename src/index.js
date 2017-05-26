$(document).ready(function(){
    // $("#textBox").val()
    $("#submitButton").on('click', function(e){
        e.preventDefault()

        var boxText = $("#textBox").val()
        var comment = new Comment(boxText)
        $("#comment-list").append(comment.render())
        $("#textBox").val('')

    })
})
