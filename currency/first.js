const BASE_URL = "https://latest.currency-api.pages.dev/v1/currencies/eur.json";

const fromSelect = document.querySelectorAll("select")[0];
const toSelect = document.querySelectorAll("select")[1];
const amountInput = document.querySelector("input");
const button = document.querySelector(".btn");
const resultBox = document.querySelector("#result");

fetch(BASE_URL)
  .then(response => {
    if (!response.ok) {
      resultBox.textContent = "Could not load currency data. Try again later.";
      return;
    }

    return response.json();
  })
  .then(data => {
    if (!data || !data.eur) {
      resultBox.textContent = "Currency data not found.";
      return;
    }

    const rates = data.eur;
    const currencyCodes = Object.keys(rates);


    currencyCodes.forEach(code => {
      const option1 = document.createElement("option");
      const option2 = document.createElement("option");
      option1.value = option2.value = code;
      option1.textContent = option2.textContent = code.toUpperCase();
      fromSelect.appendChild(option1);
      toSelect.appendChild(option2);
    });

    button.addEventListener("click", (e) => {
      e.preventDefault();

      const amount = parseFloat(amountInput.value);
      const from = fromSelect.value;
      const to = toSelect.value;

      if (isNaN(amount) || amount <= 0) {
        resultBox.textContent = "Enter a valid amount.";
        return;
      }

      if (!rates[to]) {
        resultBox.textContent = "Selected currency not available.";
        return;
      }

    const converted = (amount * rates[to]).toFixed(2);
      resultBox.textContent = `${amount} ${from.toUpperCase()} = ${converted} ${to.toUpperCase()}`;
    });
  });
