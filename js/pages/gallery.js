import { renderGallery } from "../render/renderGallery.js";

export const galleryPostParent = document.querySelector ("section");

export function renderGalleryPage (posts, galleryPostParent, header) {
    renderGallery (posts, galleryPostParent, header);
}