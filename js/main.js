/*jslint devel: true, eqeq: true, sloppy: true, vars: true*/
/*global $, jQuery, alert*/

$(document).ready(function () {
    lightbox.option({
        'showImageNumberLabel': false,
        'maxWidth': 400,
        'maxHeight': 400,
        'alwaysShowNavOnTouchDevices': true
    });
    var pokeData = [];
    var arr = []; // Will store the random list of pokemon id #s
    var pokeName = ""; // Had to declare there outside of the function, not sure why to be honest.
    var pokeTypes = [];

    // This took forever to figure out. I wanted unique numbers so that no pokemon is doubled.
    while (arr.length < 12) {
        var random_number = Math.round(Math.random() * (151) + 1);
        if (arr.indexOf(random_number) === -1) {
            arr.push(random_number);
        }
    }

    arr.forEach(function (random) { // cycle through each number in arr
        var pokeURL = "http://pokeapi.co/api/v1/pokemon/" + random;
        var pokeImage = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + random + ".png";
        $.getJSON(pokeURL, function (data) {
            var pokeName = "Name: " + data.name;
            var pokeWeight = "Weight: " + data.weight;
            var pokeHeight = "Height: " + data.height;
            for (i = 0; i < data.types.length; i++) {
                if (typeof data.types[i].name != "undefined") {
                    pokeTypes.push(data.types[i].name);
                    // console.log(data.types[i].name); // Any console.log() you see is for my own debugging and practice during coding :)
                }
            };
            pokeTypes = pokeTypes.join(', ');
            var pokeType = "Type(s): " + pokeTypes
            var pokeInfo = pokeName + "</br>" + pokeWeight + "</br>" + pokeHeight + "</br>" + pokeType;
            pokeTypes = [];
            // console.log(pokeName); // Any console.log() you see is for my own debugging and practice during coding :)
            document.getElementById('pokeTable').innerHTML += "<li><a class='pokeContainer gallery-image' href='" + pokeImage + "' data-lightbox='pokeBox' data-title='" + pokeInfo + "'>" + "<img class='pokeImage gallery-thumbnails' src=" + pokeImage + " alt=''></a></li>";
        });
    });
});
