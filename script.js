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
  const loadCommentsButton = document.createElement("button");

  loadCommentsButton.textContent = "Show comments";
  loadCommentsButton.addEventListener("pointerdown", () => {
    getComments(contentView);
  });

  contentTitle.classList.add("content-title");
  contentBody.classList.add("content-body");

  contentTitle.textContent = title;
  contentBody.textContent = body;

  contentView.appendChild(contentTitle);
  contentView.appendChild(contentBody);
  contentView.appendChild(loadCommentsButton);
}

function getComments(content) {
  fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => response.json())
  .then((data) => {
    showComments(data, content);
  });
}

function showComments(comments, content) {
  const commentsWrap = document.createElement("div");
  commentsWrap.classList.add("comments");

  for (const comment of comments) {
    const commentContainer = document.createElement("div");
    const commentTitle = document.createElement("h3");
    const commentBody = document.createElement("p");
    const commentEmail = document.createElement("p");

    
    commentContainer.classList.add("comment-container");
    commentTitle.classList.add("comment-title");
    commentBody.classList.add("comment-body");
    commentEmail.classList.add("comment-email");

    commentTitle.textContent = comment.title;
    commentBody.textContent = comment.body;
    commentEmail.textContent = comment.email;

    commentContainer.appendChild(commentTitle);
    commentContainer.appendChild(commentEmail);
    commentContainer.appendChild(commentBody);

    commentsWrap.appendChild(commentContainer);
  }

  content.appendChild(commentsWrap);
}