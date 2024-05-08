import { renderPosts } from "../render/renderPosts.js";

export const parentOtherPosts = document.querySelector(".other-posts");

export function renderHome(posts, parentOtherPosts) {

    renderPosts(posts, parentOtherPosts);
}