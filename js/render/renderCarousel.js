export async function renderCarousel(posts, parent, heading) {
    parent.innerHTML = "";
    parent.innerHTML = heading;
    for (let i = 0; i < posts.length; i++) {
      parent.innerHTML += `
        <li class="carousel-post">
          <figure class="carousel-img-container">
            <a href="./Post/index.html?id=${posts[i].id}">
              <img class="carousel-img" src="${posts[i].images[0].src}" alt="picture of ${posts[i].name}" />
            </a>
          </figure>
          <a href="./Post/index.html?id=${posts[i].id}">
            <h2 class="carousel-post-title">${posts[i].name}</h2>
          </a>
        </li> `
    }
  }