const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "b8b602950bmshb52b1abe5b5d6ffp1920bajsn134a5b009702",
    "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
  },
};

const converterCurrency = async (oldCurrency: FormDataEntryValue, newCurrency: FormDataEntryValue, amount: FormDataEntryValue) => {
  const response = await fetch(
    `https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency?have=${oldCurrency}&want=${newCurrency}&amount=${amount}`,
    options
  );

  return await response.json();
};

export { converterCurrency };
