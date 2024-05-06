import { renderGallery } from "../render/renderGallery.js";


export const galleryPostParent = document.querySelector (".gallery-posts");

export function renderGalleryPage (getPosts, galleryPostParent) {
    renderGallery (getPosts, galleryPostParent);
}