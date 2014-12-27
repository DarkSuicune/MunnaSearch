$(function(){
    
    $('.catbutton').click(function(){
        var poke = $('.Pokemon').val();
        $('.result').html('<span class="result">' + poke + ', huh? We\'ve got some pretty cool stuff about ' + poke + '!</span>');
  });
});
