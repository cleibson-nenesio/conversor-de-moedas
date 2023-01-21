import { converterCurrency } from "./services/converter-currency/converter-currency.js";
import { generateCurrencies } from "./screen/currencies-select.js";

const actualCurrency = document.querySelector("#select-actual-currency");
const newCurrency = document.querySelector("#select-new-currency");

const form: HTMLFormElement | null = document.querySelector(".form");

form?.addEventListener("submit", async (e) => {
  e.preventDefault();
  const newAmount = <HTMLInputElement>document.getElementById("new-amount");

  const formData = new FormData(form);

  const data = Object.fromEntries(formData);
  const newCurrency = data["select-new-currency"];
  const oldCurrency = data["select-old-currency"];
  const amountToConvert = data["amount-to-convert"];

  const convertedCurrency = await converterCurrency(
    oldCurrency,
    newCurrency,
    amountToConvert
  );

  newAmount.value = convertedCurrency["new_amount"];
});

if (actualCurrency && newCurrency) {
  generateCurrencies(actualCurrency);
  generateCurrencies(newCurrency);
}
