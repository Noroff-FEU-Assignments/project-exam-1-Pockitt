export function renderPost(post) {
    const postPage = document.querySelector ("section");
    const title = document.querySelector ("title");
    postPage.innerHTML = "";
    postPage.innerHTML += `
    <figure>
      <img class="post-main-img" src="${post.images[0].src}" />
    </figure>
    <h2>${post.name}</h2>
    <p>
      ${post.description}
    </p>` 
      
      title.innerHTML += `Plant Dads | ${post.name}`
}
