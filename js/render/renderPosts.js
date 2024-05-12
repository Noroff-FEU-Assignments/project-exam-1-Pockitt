export async function renderPosts(posts, parent) {
    parent.innerHTML = "";
    for (let i = 0; i < posts.length; i++) {
      parent.innerHTML += `
      <div class="post">
        <figure class="home-page-img-container">
          <a href="../Post/index.html?id=${posts[i].id}">
            <img class="home-page-img" src="${posts[i].images[0].src}" alt="picture of ${posts[i].name}" />
          </a>
        </figure>
        <a href="../Post/index.html?id=${posts[i].id}">
          <h2 class="post-title">${posts[i].name}</h2>
        </a>
      </div> `
    }
  }