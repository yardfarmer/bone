$('.dot:nth-child(1)').click(function () {
    $('.inside').animate({
        'width': '20%'
    }, 500);
});
$('.dot:nth-child(2)').click(function () {
    $('.inside').animate({
        'width': '40%'
    }, 500);
});
$('.dot:nth-child(3)').click(function () {
    $('.inside').animate({
        'width': '60%'
    }, 500);
});
$('.dot:nth-child(4)').click(function () {
    $('.inside').animate({
        'width': '80%'
    }, 500);
});

$('.dot').hover(function(){
    var $self = $(this);
    console.log($self.prevAll());

})

$('.dot').hover(function () {



    var modal = $(this).attr('id');
    $('article').hide()
    $('article.' + modal).fadeIn(200);
});