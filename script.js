const apiKey = ""
const informationEl = document.getElementById("information")

function getSearch() {
  let searchValue = document.querySelector("#search").value;
  console.log(searchValue);

  getTickerInfo(searchValue);
  document.querySelector("#search").value = "";
}

function getTickerInfo(searchValue) {
  const apiURL = "https://api.polygon.io/v2/aggs/ticker/" + searchValue + "/range/1/day/2020-06-01/2020-06-17?apiKey=" + apiKey;

  fetch(apiURL)
    .then(function (response) {
      return response.json()
    }).then(function (data) {
      console.log(data);

      const symbol = data.ticker;
      console.log(symbol);
      let symbolEl = document.createElement("h1");
      symbolEl.textContent = symbol;
      informationEl.append(symbolEl)

    })


}

searchBtn.addEventListener("click", getSearch);