const endpoint = 'https://favqs.com/api/qotd';
var quote;

function getQuote() {
    fetch(endpoint)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        showQuote(data.quote.body,data.quote.author);
      })
      .catch(function () {
        console.log("An error occurred");
      });
  }

function showQuote(body,author){
    const refQuote = document.querySelector('.quoter');
    refQuote.textContent = '"'+body+'"';
    const refAuth = document.querySelector('.author');
    refAuth.textContent = author;
}

getQuote();