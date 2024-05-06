import { renderPosts } from "../render/renderPosts.js";

export const parentRecentPosts = document.querySelector(".recent-posts");
export const parentOtherPosts = document.querySelector(".other-posts")

export function renderHome(posts1, posts2, parentRecentPosts, parentOtherPosts) {

renderPosts(posts1, parentRecentPosts);
renderPosts(posts2, parentOtherPosts);
}