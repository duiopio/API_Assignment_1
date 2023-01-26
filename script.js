const sidebar = document.querySelector("#sidebar");
const contentView = document.querySelector("#content-view");

function getData() {
  fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });
}

function displayData(posts) {
  for (const post of posts) {
    const postContainer = document.createElement("div");

    postContainer.addEventListener("click", () => {
      console.log("Click");
      contentView.innerHTML = `
          <h2>${post.title}</h2>
          <p>${post.body}</p>
      `
  });

    const postTitle = document.createElement("h2");
    const postBody = document.createElement("p");

    postContainer.classList.add("post-container");

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);

    sidebar.appendChild(postContainer);
  }
}

function  setup() {
  getData();
}

setup();




postContainer.addEventListener("pointerdown", function(event) {
  const detailContainer = document.createElement("div");
  const detailTitle = document.createElement("h2");
  const detailBody = document.createElement("p");

  detailTitle = post.title;
  detailBody = post.body;

  detailContainer.appendChild(detailTitle);
  detailContainer.appendChild(detailBody);
  contentView.appendChild(detailContainer);
});