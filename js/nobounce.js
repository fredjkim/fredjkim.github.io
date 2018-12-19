// Disable overscroll / viewport moving on everything but scrollable divs
$('body').on('scroll', function (e) {
        if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
});

$('body').on('touchmove', function (e) {
        if (!$('.scrollable').has($(e.target)).length) e.preventDefault();
});
