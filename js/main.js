/*global $, jQuery, alert*/

$(document).ready(function () {
    var arr = []; // Will store the random list of pokemon id #s
    var pokeName = ""; // Had to declare there outside of the function, not sure why to be honest.

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
            var pokeName = data.name;
            console.log(pokeName);
            document.getElementById('main').innerHTML += "<article class='pokeContainer'><img class='pokeImage' src=" + pokeImage + "></article>";
        });
    });
});
