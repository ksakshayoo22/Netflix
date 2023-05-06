const API_KEY = "92e0504fd6d27bafa4ba06f798dc7dfc";

const requests = {
  fetchUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&language=en-US&page=1`,
  fetchPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=2`,
  fetchHorror: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=horror&page=1&include_adult=false`,

  fetchAction: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_genres=28`,
  fetchRomance: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
