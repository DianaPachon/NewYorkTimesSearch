function displayArticles() {
    
    var userInput='';
    var recordInput='';
    var article = $(this).attr("data-name");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + userInput + recordInput + "&apikey=844c969fc7e244009d5ac461b7e42f6e";

    // Creates AJAX call for the specific movie button being clicked
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
        var responseArray= response.docs;
        for(var i=0; i<userInput; i++){
            responseArray[i].web_url
            responseArray[i].snippet
            responseArray[i].headline.main
        }

    }
       