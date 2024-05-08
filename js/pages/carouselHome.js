import { renderCarousel } from "../render/renderCarousel.js";

export const parentRecentPosts = document.querySelector(".recent-posts");

export function renderCarouselHome (posts, parentRecentPosts) {
    renderCarousel(posts, parentRecentPosts);
}