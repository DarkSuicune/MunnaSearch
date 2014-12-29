$(function(){
    var items = {
    'Absorb Bulb': ' Gear Station, PWT, Wild Roserade 1%, Wild Roselia 1%',
    'Adamant Orb': ' Dragonspiral Tower',
    'Air Balloon': ' Gear Station, PWT, Wild Drifblim 1%',
    'Apicot Berry': ' Join Avenue',
    'Big Root': ' Driftveil City, Wild Cradily 5%, Wild Lileep 5%',
    'Berry Juice': ' Join Avenue, Wild Shuckle 100%',
    'Binding Band': ' Gear Station, PWT',
    'Power Anklet': ' Gear Station, PWT',
    'Power Bracer': ' Gear Station, PWT',
    'Power Belt': ' Gear Station, PWT',
    'Power Weight': ' Gear Station, PWT',
    'Power Lens': ' Gear Station, PWT',
    'Power Band': ' Gear Station, PWT',
    'Black Belt': ' Icirrus City, Wild Throh 5%, Wild Sawk 5%',
    'Black Sludge': ' Castelia Sewers, Wild Grimer 5%, Wild Muk 50%, Wild Croagunk 5%, Wild Toxicroak 5%, Wild Trubbish 5%, Wild Garbodor 50%',
    'Black Glasses': ' Desert Resort',
    'Charcoal': ' Castelia City',
    'Deep Sea Scale': ' White Forest, Join Avenue, Wild Chinchou 5%, Wild Lanturn 5%, Wild Gorebyss 5%, Wild Relicanth 5%',
    'Deep Sea Tooth': ' White Forest, Join Avenue, Wild Carvanha 5%, Wild Sharpedo 5%, Wild Huntail 5%, Wild Basculin 5%',
    'Choice Band': ' Gear Station, PWT',
    'Choice Specs': ' Gear Station, PWT',
    'Choice Scarf': ' Gear Station, PWT',
    'Damp Rock': ' Route 8',
    'Draco Plate': ' Undella Bay',
    'Dragon Fang': ' Dragonspiral Tower, Wild Bagon 5%, Wild Shelgon 5%, Wild Salamence 5%, Wild Druddigon 5%',
    'Dread Plate': ' Abyssal Ruins',
    'Earth Plate': ' Abyssal Ruins',
    'Everstone': ' Castelia City, Wild Boldore 50%, Wild Roggenrola 50%, Wild Gigalith 50%, Wild Geodude 5%, Wild Graveler 5%, Wild Golem 5%',
    'Eviolite': ' Castelia City',
    'Expert Belt': ' Driftveil City, Route 19 (Hidden), Wild Throh 1%, Wild Sawk 1%',
    'Fist Plate': ' Abyssal Ruins',
    'Flame Orb': ' Gear Station, PWT, Wild Heatmor 1%',
    'Flame Plate': ' Abyssal Ruins',
    'Focus Sash': ' Gear Station, PWT',
    'Heat Rock': ' Route 8',
    'Icicle Plate': ' Abyssal Ruins',
    'Icy Rock': ' Route 8',
    'Insect Plate': ' Abyssal Ruins',
    'Iron Plate': ' Abyssal Ruins',
    'King\'s Rock': ' Route 13, Wild Poliwhirl 5%, Wild Poliwrath 5%, Wild Slowbro 5%, Wild Politoed 5%, Wild Slowking 5%, Wild Hariyama 5%',
    'Leftovers': ' Castelia Sewers, Wild Snorlax 100%, Wild Munchlax 100%',
    'Life Orb': ' Gear Station, PWT',
    'Light Clay': ' Wild Golett 5%, Wild Golurk 5%',
    'Meadow Plate': ' Abyssal Ruins',
    'Mental Herb': ' Wild Sewaddle 5%, Wild Swadloon 5%, Wild Leavanny 5%',
    'Metal Coat': ' Clay Tunnel, Chargestone Cave, Wild Magnemite 5%, Wild Magneton 5%, Wild Steelix 5%, Wild Beldum 5%, Wild Metang 5%, Wild Metagross 5%, Wild Bronzor 5%, Wild Bronzong 5%, Wild Magnezone 5%',
    'Mind Plate': ' Abyssal Ruins',
    'Miracle Seed': ' Castelia City, Wild Cherubi 5%, Wild Cherrim 5%, Wild Maractus 5%',
    'Mystic Water': ' Route 4, Castelia City, Wild Castform 100%',
    'Never-Melt Ice': ' Dragonspiral Tower (Winter), Wild Snover 5%, Wild Abomasnow 5%, Wild Cryogonal 5%',
    'Poison Barb': ' Route 22, Wild Beedrill 5%, Wild Tentacool 5%, Wild Tentacruel 5%, Wild Qwilfish 5%, Wild Roselia 5%, Wild Budew 5%, Wild Roserade 5%, Wild Vespiquen 5%, Wild Skorupi 5%, Wild Drapion 5%, Wild Venipede 5%, Wild Whirlipede 5%, Wild Scolipede 5%',
    'Quick Claw': ' Skyarrow Bridge, Wild Sandshrew 5%, Wild Sandslash 5%, Wild Meowth 5%, Wild Persian 5%, Wild Sneasel 5%, Wild Zangoose 5%, Wild Weavile 5%',
    'Razor Fang': ' Route 11',
    'Odd Incense': ' Driftveil City',
    'Rock Incense': ' Driftveil City',
    'Wave Incense': ' Driftveil City',
    'Wise Glasses': ' Gear Station, PWT',
    'Sea Incense': ' Driftveil City',
    'Sharp Beak': ' Mistralton City, Wild Fearow 5%, Wild Doduo 5%, Wild Dodrio 5%',
    'Rose Incense': ' Driftveil City',
    'Silver Powder': ' Pinwheel Forest, Wild Butterfree 5%, Wild Masquerain 5%, Wild Wormadam 5%, Wild Mothim 5%, Wild Volcarona 100%',
    'Red Card': ' Gear Station, PWT',
    'Rocky Helmet': ' Relic Passage, PWT',
    'Shell Bell': ' Driftveil City',
    'Silk Scarf': ' Virbank Complex',
    'SilverPowder': ' Wild Butterfree 5%, Wild Masquerain 5%, Wild Wormadam 5%, Wild Mothim 5%, Wild Volcarona 100%',
    'Sky Plate': ' Abyssal Ruins',
    'Smooth Rock': ' Route 8',
    'Stick': ' Route 13, Wild Farfetch\'d 5% ',
    'Soft Sand': ' Desert Resort, Wild Diglett 5%, Wild Dugtrio 5%, Wild Trapinch 5%, Wild Stunfisk 5%',
    'Splash Plate': ' Abyssal Ruins',
    'Spell Tag': ' Celestial Tower, Wild Shuppet 5%, Wild Banette 5%, Wild Yamask 5%, Wild Cofagrigus 5%',
    'Spooky Plate': ' Abyssal Ruins',
    'Stone Plate': ' Abyssal Ruins',
    'Thick Club': ' Wild Cubone 5%, Wild Marowak 5%',
    'Twisted Spoon': ' Castelia Sewers, Wild Abra 5%, Wild Kadabra 5%, Wild Alakazam 5%',
    'Toxic Orb': ' Gear Station, PWT, Wild Muk 1%',
    'Toxic Plate': ' Abyssal Ruins',
    'Zap Plate': ' Abyssal Ruins',
    'Babiri Berry': ' Join Avenue, Wild Snorunt 5%, Wild Glalie 5%, Wild Froslass 5%',
'Belue Berry': ' Join Avenue',
'Charti Berry': ' Join Avenue, Wild Taillow 5%, Wild Swellow 5%',
'Chesto Berry': ' Join Avenue, Wild Whismur 5%, Wild Loudred 5%, Wild Exploud 5%, Wild Spinda 5%, Wild Minccino 50%, Wild Cinccino 50%',
'Chilan Berry': ' Join Avenue',
'Chople Berry': ' Join Avenue',
'Coba Berry': ' Join Avenue',
'Colbur Berry': ' Join Avenue, Wild Chimecho 5%, Wild Chingling 5%',
'Durin Berry': ' Join Avenue', 
'Griseous Orb': ' Dragonspiral Tower',
'Lustrous Orb': ' Dragonspiral Tower', 
'Macho Brace': ' Route 16', 
'Magnet': ' Chargestone Cave', 
'Muscle Band': ' Gear Station, PWT', 
'Hard Stone': ' Relic Passage, Join Avenue, Wild Corsola 5%, Wild Nosepass 5%, Wild Aron 5%, Wild Lairon 5%, Wild Aggron 5%, Wild Probopass 5%, Wild Roggenrola 5%, Wild Boldore 5%, Wild Gigalith 5%, Wild Dwebble 5%, Wild Crustle 5%', 
'Ganlon Berry': ' Join Avenue', 
'Haban Berry': ' Join Avenue, Wild Gible 5%, Wild Gabite 5%, Wild Garchomp 5%', 
'Kasib Berry': ' Join Avenue, Wild Duskull 5%, Wild Dusclops 5%, Wild Dusknoir 5%', 
'Kebia Berry': ' Join Avenue, Wild Shroomish 5%, Wild Breloom 5%', 
'Leppa Berry': ' Join Avenue, Wild Clefairy 50%, Wild Clefable 50%, Wild Cleffa 50%', 
'Liechi Berry': ' Join Avenue', 
'Lum Berry': ' Join Avenue, Wild Mew 100%, Wild Celebi 100%, Wild Shaymin 100%', 
'Occa Berry': ' Join Avenue, Wild Mawile 5%, Wild Pansage 5%, Wild Simisage 5%', 
'Metal Powder': ' Route 13, Wild Ditto 5%', 
'Iron Ball': ' Gear Station, PWT', 
'Light Ball': ' Wild Pikachu 5%', 
'Lagging Tail': ' Wild Slowpoke 5%, Wild Lickitung 5%, Wild Lickilicky 5%', 
'Oran Berry': ' Join Avenue Wild Sentret 5%, Wild Furret 50%, Wild Zigzagoon 5%, Wild Linoone 50%, Wild Bibarel 50%, Wild Pansage 50%, Wild Simisage 50%, Wild Pansear 50%, Wild Simisear 50%, Wild Panpour 50%, Wild Simipour 50%, Wild Audino 50%', 
'Passho Berry': ' Join Avenue, Wild Phanpy 5%, Wild Donphan 5%, Wild Pansear 5%, Wild Simisear 5%', 
'Payapa Berry': ' Join Avenue, Wild Mankey 5%, Wild Primeape 5%', 
'Rawst Berry': ' Join Avenue, Wild Vulpix 100%, Wild Ninetales 100%, Wild Growlithe 50%, Wild Arcanine 50%, Wild Numel 100%, Wild Camerupt 100%, Wild Darumaka 50%, Wild Darmanitan 50%', 
'Rindo Berry': ' Join Avenue, Wild Finneon 5%, Wild Lumineon 5%, Wild Panpour 5%, Wild Simipour 5%', 
'Salac Berry': ' Join Avenue', 
'Shuca Berry': ' Join Avenue, Wild Ponyta 5%, Wild Rapidash 5%', 
'Sitrus Berry': ' Join Avenue, Wild Furret 5%, Wild Linoone 5%, Wild Bibarel 5%, Wild Audino 5%', 
'Tanga Berry': ' Join Avenue', 
'Wacan Berry': ' Join Avenue', 
'Watmel Berry': ' Join Avenue', 
'Yache Berry': ' Join Avenue, Wild Starly 5%, Wild Staravia 5%, Wild Staraptor 5%' 
        
    };
    
    var hpInfo = 'Level up holding Power Weight against Stunfisk for a total of 6 HP EVs per level. Level up holding Power Weight against Victini for a total of 7 HP EVs per level.';
    $('.Pokemon').keypress(function(event){
        if(event.which == 13){
            $('.go').click();
        }
    });
    
    $('.go').click(function(){
        var poke = $('.Pokemon').val();
        $('.result-container').html('<span class="result">How to breed the perfect ' + poke + '!</span>' +
        '<p class="moveinfo">Pokemon: ' + poke + '</p>' +
        '<p class="moveinfo">Gender: 50% male - 50% female</p>' +
        '<p class="moveinfo">' + $('.item :selected').text() +': Found at ' + items[$('.item :selected').text()] + '</p>' +
        '<p class="moveinfo">EVs: ' + ($('.hp').val() ? hpInfo) + '</p>' +
        '<p class="moveinfo">' + $('.nature :selected').text() + ' Nature: Breed with a ' + $('.nature :selected').text() + ' nature Ditto holding an Everstone </p>' +
        '<p class="moveinfo">' + $('.move-1 :selected').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-2 :selected').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-3 :selected').text() + ': Hey</p>' +
        '<p class="moveinfo">' + $('.move-4 :selected').text() + ': Hey</p>'
        );
  });
  
			// var request = new XMLHttpRequest();
			// request.open("GET", "http://pokeapi.co/api/v1/pokemon/245/", false); // synchronous request
			// request.send(null);
			// var parse = JSON.parse(request.responseText);
			// document.write(parse);
				
});
