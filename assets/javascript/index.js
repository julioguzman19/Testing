$('#button').on("click", function () {
    let businessSearch = document.getElementById("inputSearch").value;
    let api = "http://www.mapquestapi.com/search/v3/prediction?";
    let apiKey = "key=A7A5TP3tsSvq4IqcXRmXxVNa6e8JHbA4";
    let query = `&limit=5&collection=adminArea,poi,address,category,franchise,airport&q=${businessSearch}`;
    let queryURL = ( api + apiKey + query);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // let headline = response.response.docs[i].headline.main;
            // let articleUrl = response.response.docs[i].web_url;
            // let link = articleUrl.link(articleUrl); //turning URLs to clickable links for user
            // let snippet = response.response.docs[i].snippet;

            // $('#newHeadlineOnSearch').append(i + 1 + ": " + headline);
            // $('#newHeadlineOnSearch').append("<p></p>");
            // $('#newSnippetsOnSearch').append(i + 1 + ": " + snippet);
            // $('#newSnippetsOnSearch').append("<p></p>");
            // $('#newNewsLinksOnSearch').append(i + 1 + ": " + link);
            // $('#newNewsLinksOnSearch').append("<p></p>");
        })
})