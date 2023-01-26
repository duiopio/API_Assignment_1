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
    const postTitle = document.createElement("h2");
    const postBody = document.createElement("p");

    postContainer.classList.add("post-container")

    postTitle.textContent = post.title;
    postBody.textContent = post.body;

    postContainer.appendChild(postTitle);
    postContainer.appendChild(postBody);
    document.body.appendChild(postContainer);
  }
}

function  setup() {
  getData();
}

setup();