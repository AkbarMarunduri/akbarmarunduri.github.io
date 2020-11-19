// event pd saat link di klk
$('.page-scroll').on('click', function(e){

	// mengambil href
	var tujuan = $(this).attr('href');
	
	// tangkap element ybs
	var elemenTujuan = $(tujuan);

	// animasi scroll saat klik nav
	$('html, body').animate({
		scrollTop: elemenTujuan.offset().top
	}, 1000, 'easeOutExpo');



	e.preventDefault(); 

});


// parallax
// untuk halaman saat di refrest
$(window).on('load', function () {
    $('.display-4').addClass('hmuncul');
    $('.logo').addClass('loganim');
    $('.line').addClass('lineanim');

    $('.sosmed a').each(function(i) {
            setTimeout(function () {
                $('.sosmed a').eq(i).addClass('sosanim');
                
            }, 300 * i);
        });

    $('.jumbotron p').addClass('introanim');


    $('.nav-link').each(function(i) {
            setTimeout(function () {
                $('.nav-link').eq(i).addClass('navanim');
                
            }, 300 * i);
        });

    $('.introduction').addClass('introducanim');
    $('.foto').addClass('fotoanim');
    
    // tv show
    // $('.tv-show h1').addClass('tv-h1-anim');
    // $('.gambar').addClass('gambar-anim');
    // $('.tv-show p').addClass('tvp-anim');

    

});






// untuk halaman saaat scroll
$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    // console.log(wScroll);

    // portfolio
    if (wScroll > $('.portfolio').offset().top-50) {
        $('.portfolio .thumbnail').each(function(i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('muncul');
                
            }, 300 * i);
        });
    }

    // contact tittle
    if (wScroll > $('.contact').offset().top-300) {
        $('.contact p').each(function(i) {
            setTimeout(function () {
                $('.contact p').eq(i).addClass('conanim');
                
            }, 300 * i);
        });
    }

    // contact image/icon
    if (wScroll > $('.contact').offset().top-300) {
        $('.contact img').each(function(i) {
            setTimeout(function () {
                $('.contact img').eq(i).addClass('con-img-anim');
                
            }, 300 * i);
        });
    }

     // contact content
    if (wScroll > $('.contact').offset().top-300) {
        $('.contact span').each(function(i) {
            setTimeout(function () {
                $('.contact span').eq(i).addClass('con-content-anim');
                
            }, 300 * i);
        });
    }

    // Experties Tittle
    if (wScroll > $('.experties').offset().top-100) {
        $('.experties p').each(function(i) {
            setTimeout(function () {
                $('.experties p').eq(i).addClass('exp-p-anim');
                
            }, 300 * i);
        });
    }

     // Experties Card
    if (wScroll > $('.experties').offset().top) {
        $('.experties .card').each(function(i) {
            setTimeout(function () {
                $('.experties .card').eq(i).addClass('card-anim');
                
            }, 300 * i);
        });
    }

     // Portfolio Judul
    if (wScroll > $('.portfolio').offset().top-200) {
        $('.portfolio span').each(function(i) {
            setTimeout(function () {
                $('.portfolio span').eq(i).addClass('port-span-anim');
                
            }, 300 * i);
        });
    }

    // Portfolio txtport
    if (wScroll > $('.portfolio').offset().top-200) {
        $('.poliotxt').each(function(i) {
            setTimeout(function () {
                $('.poliotxt').eq(i).addClass('poliotxt-anim');
                
            }, 300 * i);
        });
    }

     // Portfolio txt
    if (wScroll > $('.portfolio').offset().top-200) {
        $('.txt').each(function(i) {
            setTimeout(function () {
                $('.txt').eq(i).addClass('txtanim');
                
            }, 300 * i);
        });
    }

    // Portfolio more
    if (wScroll > $('.portfolio').offset().top-200) {
        $('.portfolio .more').each(function(i) {
            setTimeout(function () {
                $('.portfolio .more').eq(i).addClass('port-more-anim');
                
            }, 300 * i);
        });
    }

    // Portfolio project card kanan
    if (wScroll > $('.portfolio').offset().top+600) {
        $('.card-kanan').each(function(i) {
            setTimeout(function () {
                $('.card-kanan').eq(i).addClass('card-kanan-anim');
                
            }, 300 * i);
        });
    }

    // Portfolio project card kiri
    if (wScroll > $('.portfolio').offset().top) {
        $('.ckiri1').each(function(i) {
            setTimeout(function () {
                $('.ckiri1').eq(i).addClass('card-kiri1-anim');
                
            }, 300 * i);
        });
    }

     // Portfolio project card kiri
    if (wScroll > $('.portfolio').offset().top+1000) {
        $('.ckiri2').each(function(i) {
            setTimeout(function () {
                $('.ckiri2').eq(i).addClass('card-kiri2-anim');
                
            }, 300 * i);
        });
    }

    // Ask How?
    if (wScroll > $('.ask').offset().top-600) {
        $('.how').each(function(i) {
            setTimeout(function () {
                $('.how').eq(i).addClass('howanim');
                
            }, 300 * i);
        });
    }
    
    // Ask txt
    if (wScroll > $('.ask').offset().top-600) {
        $('.asktxt').each(function(i) {
            setTimeout(function () {
                $('.asktxt').eq(i).addClass('asktxt-anim');
                
            }, 300 * i);
        });
    }

    // Ask more
    if (wScroll > $('.ask').offset().top-600) {
        $('.ask .more').each(function(i) {
            setTimeout(function () {
                $('.ask .more').eq(i).addClass('ask-more-anim');
                
            }, 300 * i);
        });
    }

    // Ask quotes
    if (wScroll > $('.ask').offset().top-600) {
        $('.quotes').each(function(i) {
            setTimeout(function () {
                $('.quotes').eq(i).addClass('quotes-anim');
                
            }, 300 * i);
        });
    }

    // Footer ling
    if (wScroll > $('.ask').offset().top-600) {
        $('.lingkaran').each(function(i) {
            setTimeout(function () {
                $('.lingkaran').eq(i).addClass('ling-anim');
                
            }, 300 * i);
        });
    }

     // Footer ling
    if (wScroll > $('.ask').offset().top-600) {
        $('.copy').each(function(i) {
            setTimeout(function () {
                $('.copy').eq(i).addClass('copy-anim');
                
            }, 300 * i);
        });
    }


});







