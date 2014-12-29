$(function(){
    var items = {
    'Absorb Bulb': ' Gear Station (32BP), PWT (16BP), Wild Roserade 1%, Wild Roselia 1%',
    'Air Balloon': ' Gear Station (12BP), PWT (12BP), Wild Drifblim 1%',
    'Big Root': ' Driftveil City (Gift), Wild Cradily 5%, Wild Lileep 5%',
    'Binding Band': ' Gear Station (8BP), PWT (8BP)',
    'Black Belt': ' Icirrus City (Gift), Wild Throh 5%, Wild Sawk 5%',
    'Black Sludge': ' Castelia Sewers, Wild Grimer 5%, Wild Muk 50%, Wild Croagunk 5%, Wild Toxicroak 5%, Wild Trubbish 5%, Wild Garbodor 50%',
    'BlackGlasses': ' Desert Resort',
    'Choice Band': ' Gear Station, PWT',
    'Choice Specs': ' Gear Station, PWT',
    'Choice Scarf': ' Gear Station, PWT',
    'Damp Rock': ' Route 8 (Gift)',
    'Draco Plate': ' Route 13',
    'Dragon Fang': ' Dragonspiral Tower, Wild Bagon 5%, Wild Shelgon 5%, Wild Salamence 5%, Wild Druddigon 5%',
    'Dread Plate': ' Undersea Ruins',
    'Earth Plate': ' Undersea Ruins',
    'Everstone': ' Castelia City, Wild Boldore 50%, Wild Roggenrola 50%, Wild Gigalith 50%, Wild Geodude 5%, Wild Graveler 5%, Wild Golem 5%',
    'Eviolite': ' Castelia City',
    'Expert Belt': ' Driftveil City, Route 19 (Hidden), Wild Throh 1%, Wild Sawk 1%',
    'Fist Plate': ' Undersea Ruins',
    'Flame Orb': ' Gear Station, PWT, Wild Heatmor 1%',
    'Flame Plate': ' Undersea Ruins',
    'Focus Sash': ' Gear Station, PWT',
    'Heat Rock': ' Route 8',
    'Icicle Plate': ' Undersea Ruins',
    'Icy Rock': ' Route 8',
    'Insect Plate': ' Undersea Ruins',
    'Iron Plate': ' Undersea Ruins',
    'King\'s Rock': ' Route 13, Wild Poliwhirl 5%, Wild Poliwrath 5%, Wild Slowbro 5%, Wild Politoed 5%, Wild Slowking 5%, Wild Hariyama 5%',
    'Leftovers': ' Castelia Sewers, Wild Snorlax 100%, Wild Munchlax 100%',
    'Life Orb': ' Gear Station, PWT',
    'Light Clay': ' Wild Golett 5%, Wild Golurk 5%',
    'Meadow Plate': ' Undersea Ruins',
    'Mental Herb': ' Wild Sewaddle 5%, Wild Swadloon 5%, Wild Leavanny 5%',
    'Metal Coat': ' Clay Tunnel, Chargestone Cave, Wild Magnemite 5%, Wild Magneton 5%, Wild Steelix 5%, Wild Beldum 5%, Wild Metang 5%, Wild Metagross 5%, Wild Bronzor 5%, Wild Bronzong 5%, Wild Magnezone 5%',
    'Mind Plate': ' Undersea Ruins',
    'Miracle Seed': ' Castelia City, Wild Cherubi 5%, Wild Cherrim 5%, Wild Maractus 5%',
    'Mystic Water': ' Route 4, Castelia City, Wild Castform 100%',
    'NeverMeltIce': ' Dragonspiral Tower (Winter), Wild Snover 5%, Wild Abomasnow 5%, Wild Cryogonal 5%',
    'Poison Barb': ' Route 22, Wild Beedrill 5%, Wild Tentacool 5%, Wild Tentacruel 5%, Wild Qwilfish 5%, Wild Roselia 5%, Wild Budew 5%, Wild Roserade 5%, Wild Vespiquen 5%, Wild Skorupi 5%, Wild Drapion 5%, Wild Venipede 5%, Wild Whirlipede 5%, Wild Scolipede 5%',
    'Quick Claw': ' Skyarrow Bridge, Wild Sandshrew 5%, Wild Sandslash 5%, Wild Meowth 5%, Wild Persian 5%, Wild Sneasel 5%, Wild Zangoose 5%, Wild Weavile 5%',
    'Razor Fang': ' Route 11',
    'Red Card': ' Gear Station, PWT',
    'Rocky Helmet': ' Relic Passage, PWT',
    'Shell Bell': ' Driftveil City',
    'Silk Scarf': ' Virbank Complex',
    'SilverPowder': ' Wild Butterfree 5%, Wild Masquerain 5%, Wild Wormadam 5%, Wild Mothim 5%, Wild Volcarona 100%',
    'Sky Plate': ' Undersea Ruins',
    'Smooth Rock': ' Route 8',
    'Soft Sand': ' Desert Resort, Wild Diglett 5%, Wild Dugtrio 5%, Wild Trapinch 5%, Wild Stunfisk 5%',
    'Splash Plate': ' Undersea Ruins',
    'Spooky Plate': ' Undersea Ruins',
    'Stone Plate': ' Undersea Ruins',
    'Toxic Orb': ' Gear Station, PWT, Wild Muk 1%',
    'Toxic Plate': ' Undersea Ruins',
    'Zap Plate': ' Undersea Ruins'
    };
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.go').click();
        }
    });
    
    $('.go').click(function(){
        var poke = $('.Pokemon').val();
        $('.result-container').html('<span class="result">How to breed the perfect ' + poke + '!</span>' +
        '<p class="moveinfo">Gender: 50% male - 50% female</p>' +
        '<p class="moveinfo">' + $('.item :selected').text() +': Found at ' + items[$('.item :selected').text()] + '</p>' +
        '<p class="moveinfo">EVs: Time to EV train :D!</p>' +
        '<p class="moveinfo">' + $('.nature :selected').text() + ' Nature: Breed with a timid Ditto holding an Everstone</p>' +
        '<p class="moveinfo">' + $('.move-1 :selected').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-2 :selected').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-3 :selected').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-4 :selected').text() + ': Hey</p>'
        );
  });
});
