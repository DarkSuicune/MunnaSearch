$(function(){
    
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.catbutton').click();
        }
    });
    
    $('.catbutton').click(function(){
        var poke = $('.Pokemon').val();
        $('.result').html('<span class="result">' + poke + ', huh? We\'ve got some pretty cool stuff about ' + poke + '!</span>');
  });
});
