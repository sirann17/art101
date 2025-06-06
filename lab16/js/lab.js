$.ajax({
  url: "https://api.allorigins.win/get?url=" + encodeURIComponent("https://xkcd.com/info.0.json"),
  type: "GET",
  dataType: "json",
  success: function(response) {
    let comicObj = JSON.parse(response.contents);

    console.log(comicObj);

    let title = `<h3>${comicObj.title}</h3>`;
    let img = `<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}">`;
    let altText = `<p><em>${comicObj.alt}</em></p>`;

    $("#output").html(title + img + altText);
  },
  error: function(jqXHR, textStatus, errorThrown) {
    console.log("Error:", textStatus, errorThrown);
  }
});
