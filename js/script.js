import { url } from "./data/constant.js";
import { getPosts } from "./data/getPosts.js";
import { posts } from "./data/filterData.js";
import { renderHome, parentOtherPosts } from "./pages/home.js";
import { renderPostPage } from "./pages/postPage.js";
import { getId } from "./data/getID.js";
import { renderGalleryPage, galleryPostParent } from "./pages/gallery.js";
import { renderCarouselHome, parentRecentPosts } from "./pages/carouselHome.js";
import { buttons } from "./data/carouselButtons.js";



switch(location.pathname) {
    case "/gallery/":
      try {
         renderGalleryPage (posts, galleryPostParent)
  
      } catch (error) {
        alert(`An error has occured. Details: ${error}`);
      }
      break;
  
    case "/post/":
      try {
          const id = getId();
          const newURL = url + "/" + id;
          const title = await getPosts(newURL);
          renderPostPage(title);
  
      } catch(error) {
        alert(`An error has occured. Details: ${error}`);
      }

      break;
    default:
       try {
          buttons;
          renderCarouselHome(posts, parentRecentPosts);
          renderHome(posts, parentOtherPosts);
       } catch(error) {
          alert(`An error has occured. Details: ${error}`);
       }
}


//Hamburger Menu
const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active");
    offScreenMenu.classList.toggle("active");
})