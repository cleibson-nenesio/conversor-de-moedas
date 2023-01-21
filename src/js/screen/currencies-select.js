const currenciesCodes = [
  "ALL",
  "AFN",
  "ARS",
  "AWG",
  "AUD",
  "AZN",
  "BSD",
  "BBD",
  "BDT",
  "BYR",
  "BZD",
  "BMD",
  "BOB",
  "BAM",
  "BWP",
  "BGN",
  "BRL",
  "BND",
  "KHR",
  "CAD",
  "KYD",
  "CLP",
  "CNY",
  "COP",
  "CRC",
  "HRK",
  "CUP",
  "CZK",
  "DKK",
  "DOP",
  "XCD",
  "EGP",
  "SVC",
  "EEK",
  "EUR",
  "FKP",
  "FJD",
  "GHC",
  "GIP",
  "GTQ",
  "GGP",
  "GYD",
  "HNL",
  "HKD",
  "HUF",
  "ISK",
  "INR",
  "IDR",
  "IRR",
  "IMP",
  "ILS",
  "JMD",
  "JPY",
  "JEP",
  "KZT",
  "KPW",
  "KRW",
  "KGS",
  "LAK",
  "LVL",
  "LBP",
  "LRD",
  "LTL",
  "MKD",
  "MYR",
  "MUR",
  "MXN",
  "MNT",
  "MZN",
  "NAD",
  "NPR",
  "ANG",
  "NZD",
  "NIO",
  "NGN",
  "NOK",
  "OMR",
  "PKR",
  "PAB",
  "PYG",
  "PEN",
  "PHP",
  "PLN",
  "QAR",
  "RON",
  "RUB",
  "SHP",
  "SAR",
  "RSD",
  "SCR",
  "SGD",
  "SBD",
  "SOS",
  "ZAR",
  "LKR",
  "SEK",
  "CHF",
  "SRD",
  "SYP",
  "TWD",
  "THB",
  "TTD",
  "TRY",
  "TRL",
  "TVD",
  "UAH",
  "GBP",
  "USD",
  "UYU",
  "UZS",
  "VEF",
  "VND",
  "YER",
  "ZWD",
];
const generateCurrencies = (select) => {
  select
    ? currenciesCodes.forEach((currency) => {
        select.innerHTML += `<option value="${currency}">${currency}</option>`;
      })
    : "";
};
export { generateCurrencies };
