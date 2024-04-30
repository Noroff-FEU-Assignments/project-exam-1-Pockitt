import { url } from "./data/constant";
import { getPosts } from "./data/getPosts";



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
          renderHome(recentPosts, allPosts);
       } catch(error) {
          alert(`An error has occured. Details: ${error}`);
       }
  }