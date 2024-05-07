export function renderPost(post) {
    const postPage = document.querySelector (".post-section");
    const title = document.querySelector ("title");
    postPage.innerHTML = "";
    postPage.innerHTML += `
    <figure class="post-main-img-container">
      <img class="post-main-img" src="${post.images[0].src}" />
    </figure>
    <h2 class="post-h2">${post.name}</h2>
    <p class="post-p">
      ${post.description}
    </p>` 
      
      title.innerHTML += ` | ${post.name}`
}
