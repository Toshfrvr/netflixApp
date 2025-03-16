async function verifyUser(){
    const baseURL = `https://api.themoviedb.org/3/authentication`;
    const apiReadToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY1MmJkMjMyNTBiNzM0NDUyOTA5NjZhMTRjYTY2NCIsIm5iZiI6MTc0MDk4MTM4Mi41OTcsInN1YiI6IjY3YzU0NDg2Y2NmYzc0OWFmMjkxZWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrLNNzNTvOfgT6pSQ8Wp0t9SVB_lxSvZcqkJbHIeG10`;
    try{
        let response = await fetch(baseURL, {
            headers: {
                Authorization: `bearer ${apiReadToken}`,
                accept: `application/json`
            },
        });
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error.message)
    }
}

verifyUser();


async function getMovies(){
    const baseURL = `https://api.themoviedb.org/3/trending/all/day?language=en-US`;
    const apiReadToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY1MmJkMjMyNTBiNzM0NDUyOTA5NjZhMTRjYTY2NCIsIm5iZiI6MTc0MDk4MTM4Mi41OTcsInN1YiI6IjY3YzU0NDg2Y2NmYzc0OWFmMjkxZWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrLNNzNTvOfgT6pSQ8Wp0t9SVB_lxSvZcqkJbHIeG10`;
    try{
        let response = await fetch(baseURL, {
            headers: {
                Authorization: `bearer ${apiReadToken}`,
                accept: `application/json`
            },
        });
        let data = await response.json();
        // console.log(data);

        data.results.forEach((result) => {
            let title = result.title;
            console.log(title);
        })
    }catch(error){
        console.log(error.message)
    }
}
getMovies();
async function verifyUser(){
    const baseURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US'`;
    const apiReadToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY1MmJkMjMyNTBiNzM0NDUyOTA5NjZhMTRjYTY2NCIsIm5iZiI6MTc0MDk4MTM4Mi41OTcsInN1YiI6IjY3YzU0NDg2Y2NmYzc0OWFmMjkxZWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrLNNzNTvOfgT6pSQ8Wp0t9SVB_lxSvZcqkJbHIeG10`;
    try{
        let response = await fetch(baseURL, {
            headers: {
                Authorization: `bearer ${apiReadToken}`,
                accept: `application/json`
            },
        });
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error.message)
    }
}
async function verifyUser(){
    const baseURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US'`;
    const apiReadToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY1MmJkMjMyNTBiNzM0NDUyOTA5NjZhMTRjYTY2NCIsIm5iZiI6MTc0MDk4MTM4Mi41OTcsInN1YiI6IjY3YzU0NDg2Y2NmYzc0OWFmMjkxZWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrLNNzNTvOfgT6pSQ8Wp0t9SVB_lxSvZcqkJbHIeG10`;
    try{
        let response = await fetch(baseURL, {
            headers: {
                Authorization: `bearer ${apiReadToken}`,
                accept: `application/json`
            },
        });}
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error.message)

    }
    async function verifyUser(){}
    const baseURL = `https://api.themoviedb.org/3/trending/movie/day?language=en-US'`;
    const apiReadToken = `eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY1MmJkMjMyNTBiNzM0NDUyOTA5NjZhMTRjYTY2NCIsIm5iZiI6MTc0MDk4MTM4Mi41OTcsInN1YiI6IjY3YzU0NDg2Y2NmYzc0OWFmMjkxZWM0MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ZrLNNzNTvOfgT6pSQ8Wp0t9SVB_lxSvZcqkJbHIeG10`;
    try{
        let response = await fetch(baseURL, {
            headers: {
                Authorization: `bearer ${apiReadToken}`,
                accept: `application/json`
            },
        });
        let data = await response.json();
        console.log(data);
    }catch(error){
        console.log(error.message)
        