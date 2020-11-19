
$(window).on('load', function () {
     // tv show
    $('.tv-show h1').addClass('tv-h1-anim');
    $('.gambar').addClass('gambar-anim');
    $('.tv-show p').addClass('tvp-anim');

    
    

});




// untuk halaman saaat scroll
$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // portfolio
    if (wScroll > $('.tv-show').offset().top) {
        $('.tv-show p').each(function(i) {
            setTimeout(function () {
                $('.tv-show p').eq(i).addClass('tvp-anim');
                
            }, 300 * i);
        });
    }
});