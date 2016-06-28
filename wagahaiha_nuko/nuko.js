window.onload = function() {
    $(function() {
        $('#nowloding').fadeOut();
        setTimeout(function() {
            setTimeout(function() {
                $('.char').fadeIn('slow')
            }, 500);
            $('.leftpage').fadeIn();
            $('.rightpage').slideDown("slow");
        }, 500);
    });
}
$('#a_firstpage').click(function() {
    $(".rightpage").css("background-color", "#ba2636");
    $(".char").fadeOut();
    setTimeout(function() {
        $(".char2").fadeIn("slow")
    }, 500);
});

$('#a_firstpage').click(function() {
      $(".leftpage img").css("display", "none");
      $(".leftpage").css("display","none");
      $('.leftpage').slideDown("slow");
    $('.leftpage').css("background-color", "brown");
    $('#nuko2').fadeIn('slow');
});

$('#a_secondpage').click(function() {
    location.href = "http://www.aozora.gr.jp/cards/000148/files/789_14547.html";
});
