import { renderGallery } from "../render/renderGallery.js";


export const galleryPostParent = document.querySelector (".galleryPosts");

export function renderGalleryPage (getPosts, galleryPostParent) {
    renderGallery (getPosts, galleryPostParent);
}