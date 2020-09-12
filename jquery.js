$("#warna").hide();

$("#show").click(function(){
   $('#warna').fadeIn();
});

$("#hide").click(function(){
    // $("#load-gambar").attr({'src':''})
    $("#warna").fadeOut(5000);
});