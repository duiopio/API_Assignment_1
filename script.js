function getData() {
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  });
}

function  setup() {
  getData();
}

setup();