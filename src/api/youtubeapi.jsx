export const fetchSearch = async (search) => {
console.log(search);
    const response = await fetch ("https://www.googleapis.com/youtube/v3/search?q="+search+"song&part=snippet&type=video&videoEmbeddable=true&key=AIzaSyDoqKL0lgl7ymOOuoa_FgUjdCk7DfzzSEY");
    const PostData = await response.json();
    return PostData;

}
