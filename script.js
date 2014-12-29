$(function(){
    
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.go').click();
        }
    });
    
    $('.go').click(function(){
        var poke = $('.Pokemon').val();
        $('.result-container').html('<span class="result">How to breed the perfect ' + poke + '!</span>' +
        'Gender: 50% male - 50% female' +
        'Item: Found in Granite Cave, Hoenn' +
        'EVs: Time to EV train :D!' +
        'Nature: Breed with a timid Ditto holding an Everstone' +
        '<p class="moveinfo">Move 1: Hey</p>' +
        '<p class="moveinfo">Move 2: Hey</p>' +
        '<p class="moveinfo">Move 3: Hey</p>' +
        '<p class="moveinfo">Move 4: Hey</p>'
        );
  });
});
