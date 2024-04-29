export async function getPosts (url) {
    try {
        const response = await fetch (url);
        if(response.status !== 200) {
            throw(new Error(`Fetch operation failed...`))
        }
        const posts = await response.json();
        return posts;
    } catch(error) {
        alert(`An error has occured. Details: ${error}`);
    }
}