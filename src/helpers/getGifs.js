export const getGifs = async( category ) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=A8xMXqzieIHmtO3BjGLAtf1daSSDAv8K`;
    // const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=NKc7Bacr34rHL3w9SgexCVK5bgSu2wFq`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => ({
        
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        
    }));

    return gifs;


}