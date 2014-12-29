$(function(){
    
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.go').click();
        }
    });
    
    $('.go').click(function(){
        var poke = $('.Pokemon').val();
        $('.result-container').html('<span class="result">How to breed the perfect ' + poke + '!</span>' +
        '<p class="moveinfo">Gender: 50% male - 50% female</p>' +
        '<p class="moveinfo">Item: Found in Granite Cave, Hoenn</p>' +
        '<p class="moveinfo">EVs: Time to EV train :D!</p>' +
        '<p class="moveinfo">Nature: Breed with a timid Ditto holding an Everstone</p>' +
        '<p class="moveinfo">' + $('.move-1').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-2').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-3').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-4').text() + ': Hey</p>'
        );
  });
});
