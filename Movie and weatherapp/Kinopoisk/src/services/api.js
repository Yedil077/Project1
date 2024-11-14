const ApiKey = '0a3a4e00d84de20a8f1b6dfc8a7cdfd5';

export const getTrending = async () => {
    const response = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=${ApiKey}&per_page=10&page=1`);
    const json = await response.json();
    console.log(json.results);
    return json.results;
}

export const getDetails = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${ApiKey}`);
    const json = await response.json();
    //console.log(json)
    return json
}

export const getCast = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${ApiKey}`);
    const json = await response.json();
    //console.log(json.cast[0])
    return json.cast
}

export const getReviews = async (id) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${ApiKey}`);
    const json = await response.json();
    //console.log(json.results)
    return json.results
}

export const getMovies = async (keyword) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${keyword}&api_key=${ApiKey}`);
    const json = await response.json();
    //console.log(json.results)
    return json.results

}