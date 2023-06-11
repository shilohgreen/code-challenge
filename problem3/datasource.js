// your code here:
const fetch = require("node-fetch");

class ds {
  static getPrices() {
    const endPoint = "https://interview.switcheo.com/test.json";

    // Return promise
    return fetch(endPoint)
      .then((response) => response.json())
      .then((data) => {
        // Format JSON
        const prices = data.data.prices;
        const priceArray = prices.map((price) => {
          // format into array for next then statement
          return {
            pair: price.pair,
            mid: () => (price.buy + price.sell) / 200,
            quote: () => price.pair.slice(-3),
          };
        });
        return priceArray;
      });
  }
}

ds.getPrices()
  // Chain promise statements to display data
  // Callback function takes in array as param
  .then((prices) => {
    prices.forEach((price) => {
      console.log(
        `Mid price for ${price.pair} is ${price.mid()} ${price.quote()}.`
      );
    });
  })
  .catch((error) => {
    console.err(error);
  });
