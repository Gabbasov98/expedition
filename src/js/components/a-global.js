$('input[type="tel"]').mask('+7-999-999-9999', { autoclear: false }, { placeholder: '+7             ' });

$(".header__burger").click(function() {
    $(".header").toggleClass("header--active")
})

$(".select select").niceSelect()

//
// $(document).mouseup(function (e){
//     var div = $('.header__dropdown');
//     if (!div.is(e.target) && div.has(e.target).length === 0) {
//         if($(".header").hasClass("header--active")){
//             $(".header").removeClass("header--active")
//         }
//     }
// });
