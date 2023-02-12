const sidebar = document.querySelector("#sidebar");
const contentArea = document.querySelector("#content");
let showingComments = false;

function getData() {
  fetch("https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    populateSidebar(data);
  });
}

function populateSidebar(data) {
  const currencies = Object.entries(data);
  console.log(currencies);
  currencies.map((currency) => {
    const rowElement = document.createElement("div");
    const currencyName = document.createElement("h2");
    const currencyCode = document.createElement("h3");

    rowElement.classList.add("sidebar-row");

    rowElement.addEventListener("pointerdown", () => {
      contentArea.innerHTML = "";
      const currencyCode = document.createElement("h3");
      currencyCode.textContent = currency[0];

      getRate("eur", currency[0]);

      contentArea.appendChild(currencyCode);
    });

    console.log(currency);
    currencyName.textContent = currency[1];
    currencyCode.textContent = currency[0];

    rowElement.appendChild(currencyName);
    rowElement.appendChild(currencyCode);

    sidebar.appendChild(rowElement);
  });
}

function getRate(fromCode = "eur", toCode) {
  fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${fromCode}/${toCode}.json`)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayContent(data, fromCode, toCode);
  });
}

function displayContent(data, fromCode = "eur", toCode) {
  const textField = document.createElement("input");
  textField.type = "number";
  textField.placeholder = 1;
  let array = Object.entries(data);
  let rate = array[1][1];
  let conversion = rate;
  
  textField.addEventListener("input", () => {
    conversion = (textField.value * rate).toFixed(2);

    if (textField.value != "") {
      text.textContent = `${textField.value} ${fromCode} is ${conversion} ${toCode}`;
    } else {
      conversion = rate.toFixed(2);
      text.textContent = `1 ${fromCode} is ${conversion} ${toCode}`;
    }
  });
  

  contentArea.innerHTML = "";
  const text = document.createElement("h2");
  text.textContent = `1 ${fromCode} is ${conversion} ${toCode}`;
  contentArea.appendChild(textField);
  contentArea.appendChild(text);
}

function setup() {
  getData();
}



setup();