
export async function renderPosts(posts, parent, heading) {
    parent.innerHTML = "";
    parent.innerHTML = heading;
    for (let i = 0; i < posts.length; i++) {
      parent.innerHTML += ` <div class="post">
      <figure>
        <a href="./Post/index.html?id=${posts[i].id}">
          <img src="${posts[i].images[0].src}" alt="picture of ${posts[i].name}" />
          <h2 class="post-title">${posts[i].name}</h2>
        </a>
      </figure>
    </div> `
    }
  }