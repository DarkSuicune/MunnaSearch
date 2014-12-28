$(function(){
    
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.catbutton').click();
        }
    });
    
    $('.catbutton').click(function(){
        var poke = $('.Pokemon').val();
        $('.result').html('<span class="result"> ' How to breed the perfect ' + poke + '!</span>');
  });
});
