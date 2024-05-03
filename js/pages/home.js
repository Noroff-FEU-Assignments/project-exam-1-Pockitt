import { renderPosts } from "../render/renderPosts.js";

export const parentRecentPosts = document.querySelector(".recent-posts");
export const parentOtherPosts = document.querySelector(".other-posts")

export function renderHome(posts1, posts2, parent1, parent2, header1, header2) {

renderPosts(posts1, parent1, header1);
renderPosts(posts2, parent2, header2);
}