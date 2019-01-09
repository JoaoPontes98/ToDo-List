//check off specific do's by clicking
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
})

//click on x to delete todo
$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type = 'text']").keypress(function (event) {
    if (event.which === 13) {
        //grabs the todo text from input
        var toDoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span><i class='far fa-trash-alt'></i></span> " + toDoText + "</li>");
    }
});

$(".fa-plus").click(function () {
    $("input[type='text']").fadeToggle();
})