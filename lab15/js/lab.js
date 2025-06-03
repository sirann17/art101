$(document).ready(function () {
    // Add click event to the Activate button
    $('#activate').click(function () {
        // Optional: show a loading message
        $('#output').html('<p>Fetching data from PokéAPI...</p>');

// Using the core $.ajax() method
$.ajax({
    // The URL for the request (from the api docs)
    url: "https://pokeapi.co/api/v2/pokemon/pikachu",
    // The data to send (will be converted to a query string)
    // Whether this is a POST or GET request
    type: "GET",
    // The type of data we expect back
    dataType : "json",
    // What do we do when the api call is successful
    //   all the action goes in here
    success: function(data) {
        // do stuff
        $('#output').html(`
                    <h3>${data.name.toUpperCase()}</h3>
                    <img src="${data.sprites.front_default}" alt="${data.name}">
                    <p><strong>Height:</strong> ${data.height}</p>
                    <p><strong>Weight:</strong> ${data.weight}</p>
                    <p><strong>Base Experience:</strong> ${data.base_experience}</p>
                `);
        console.log(data);
    },
    // What we do if the api call fails
    error: function (jqXHR, textStatus, errorThrown) { 
        // do stuff
        console.log("Error:", textStatus, errorThrown);
    }
});
    });
});