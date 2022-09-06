$(".competition__more").click(function () {
    $(".competition__hidden").slideToggle()
    $(this).hide()
})

$('.video').parent().click(function() {
    if ($(this).children(".video").get(0).paused) {
        $(this).children(".video").get(0).play();
        $(this).addClass("played")
    } else {
        $(this).children(".video").get(0).pause();
        $(this).removeClass("played")
    }
});
