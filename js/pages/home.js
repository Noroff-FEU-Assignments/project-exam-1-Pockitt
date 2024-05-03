import { renderPosts } from "../render/renderPosts.js";

export const parentRecentPosts = document.querySelector("figure");
export const parentOtherPosts = document.querySelector("section")

export function renderHome(posts1, posts2, parent1, parent2) {

renderPosts(posts1, parent1);
renderPosts(posts2, parent2);
}