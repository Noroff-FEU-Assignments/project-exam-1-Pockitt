export async function renderGallery(posts, parent) {
    parent.innerText = "";
    for (let i = 0; i < posts.length; i++) {
      parent.innerHTML += ` 
      <div class="gallery-post">
        <figure class="gallery-img-container">
          <a href="../Post/index.html?id=${posts[i].id}">
            <img class="gallery-img" src="${posts[i].images[0].src}" alt="picture of ${posts[i].name}" />
          </a>
        </figure>
        <a href="../Post/index.html?id=${posts[i].id}">
          <h2 class="gallery-post-title">${posts[i].name}</h2>
        </a>
      </div> `
    }
  }