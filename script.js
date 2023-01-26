const sidebar = document.querySelector("#sidebar");
const contentView = document.querySelector("#content-view");

function getData() {
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    displayData(data);
  });
}

function displayData(posts) {
  for (const post of posts) {
    const postContainer = document.createElement("div");
    

    postContainer.addEventListener("pointerdown", (event) => {
      updateContentView(post.title, post.body);
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

function updateContentView(title, body) {
  contentView.innerHTML = "";

  const contentTitle = document.createElement("h2");
  const contentBody = document.createElement("p");

  contentTitle.textContent = title;
  contentBody.textContent = body;

  contentView.appendChild(contentTitle);
  contentView.appendChild(contentBody);
}