export async function renderGallery(posts, parent, heading) {
    parent.innerHTML = "";
    parent.innerHTML = heading;
    for (let i = 0; i < posts.length; i++) {
      parent.innerHTML += ` 
      <div class="galleryPost">
        <figure class="gallery-img-container">
          <a href="./Post/index.html?id=${posts[i].id}">
            <img class="gallery-img" src="${posts[i].images[0].src}" alt="picture of ${posts[i].name}" />
          </a>
        </figure>
        <a href="./Post/index.html?id=${posts[i].id}">
          <h2 class="post-title">${posts[i].name}</h2>
        </a>
      </div> `
    }
  }