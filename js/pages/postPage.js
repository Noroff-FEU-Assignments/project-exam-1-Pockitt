import { renderPost } from "../render/renderPost.js";

export const postPageParent = document.querySelector (".post-section");
export const postPageTitle = document.querySelector ("title");

export  function renderPostPage (postPageParent, postPageTitle) {
    renderPost(postPageParent, postPageTitle);
}