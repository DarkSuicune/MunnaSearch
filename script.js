$(function(){
    
    $('.catbutton').click(function(){
        var poke = $('.result').val();
        $('.result').html('<span class="result">' + poke + ', huh? We\'ve got some pretty cool stuff about Munna!</span>');
  });
});
