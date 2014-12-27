$(function(){
    var pokemon = {
        'Munna': {
        location: 'That dreamyard place',
        recommendedItem: 'Choice Specs'
    }, 
    'Pikachu': {
        location: 'Electric places',
        otherInfo: 'hey'
    }
    };
    $('.catbutton').click(function(){
        var pokeToFind = $('.result').val();
        var pokeFound = false;
        for(x = 0; x < pokemon.length; x++){
            pokeFound = true;
        }
            if(pokeFound){
                $('.result').html('<span class="result">' + pokemon[pokeToFind] + '</span>');
            } else {
                $('.result').html('<span class="result">We couldn\'t find that Poke D;</span>');
            }
  });
});
