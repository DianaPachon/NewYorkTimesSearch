$(document).ready(function () {
var userInput; 
var recordInput;
var queryURL;
    function displayArticles() {

        userInput = $("#exampleInputEmail1").val().trim();
        recordInput = parseInt($("#exampleInputPassword1").val());

        queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + "&apikey=b9f91d369ff59547cd47b931d8cbc56b:0:74623931";

        // Creates AJAX call for the specific movie button being clicked
        return queryURL;

    }
    $('.btn-primary').on("click", function () {

        event.preventDefault();

        var queryURL = displayArticles();
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            var responseArray = response.docs;
            for (var i = 0; i < 5; i++) {
                // responseArray[i].web_url;
                // responseArray[i].snippet;
                // responseArray[i].headline.main;
                console.log(responseArray[i].web_url, responseArray[i].snippet, responseArray[i].headline.main);
            }

        })
    })

});