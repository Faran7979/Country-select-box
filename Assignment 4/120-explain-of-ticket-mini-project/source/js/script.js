let countrySelectBox = document.querySelector(".countrySelect");
let citySelect = document.querySelector(".citySelect");
let countriesData = {
  Iran: ["Tabriz", "Mashhad", "Esfahan", "Yazd", "Tehran", "Shiraz"],
  Turkey: ["Adana", "Ezmir", "Mercin", "Antalia", "Istambul"],
  US: ["Los Angeles", "Texas", "Washington", "Pennsylvania"]
};
countrySelectBox.addEventListener("change", function () {
  if (countrySelectBox.value === "Please select") {
    citySelect.innerHTML = "<option>Please Select city</option>";
  } else {
    let mainCountryName = countrySelectBox.value;
    let mainCountryCities = countriesData[mainCountryName];
    citySelect.innerHTML = " ";
    mainCountryCities.forEach(function (city) {
      citySelect.innerHTML += "<option>" + city + "</option>";
    });
  }
});
