/* evento en div initial */

$('.div-initial').click(function() {
   /* $(this).append('div');*/
   var d = document.createElement('div');
    $(d).addClass('classname')
        .html('titulo caja')
        .appendTo($("section")); //main div*/
        /*si esta dentro si funciona*/
        $('.classname').click(function () {
            alert('ey');
            $('.classname').remove();
        
        });
});





/* si se pone aparte no funciona
$('.classname').click(function () {
    alert('ey');
    $('.classname').remove();

}); */