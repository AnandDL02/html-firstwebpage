
$(window).scroll(function()
{
    $(".section-1").toggleClass("background",$(this).scrollTop()>100);
});

