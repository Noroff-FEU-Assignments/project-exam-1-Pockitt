import { url } from "./data/constant.js";
import { getPosts } from "./data/getPosts.js";
import { posts } from "./data/filterData.js";
import { renderPost } from "./render/renderPost.js";
import { renderHome, parentRecentPosts, parentOtherPosts } from "./pages/home.js";



switch(location.pathname) {
    case "../Gallery/index.html":
      try {
         renderGallery(allPosts)
  
      } catch (error) {
        alert(`An error has occured. Details: ${error}`);
      }
      break;
  
    case "/Post/index.html":
      try {
          const id = getId();
          const newURL = url + "/" + id;
          const title = await getPosts(newURL);
          renderPost(title);
  
      } catch(error) {
        alert(`An error has occured. Details: ${error}`);
      }
  
      break;
    default:
       try {
          renderHome(posts, parentRecentPosts, parentOtherPosts);
       } catch(error) {
          alert(`An error has occured. Details: ${error}`);
       }
}