const BASE = "https://api.themoviedb.org/3";
const KEY  = import.meta.env.VITE_TMDB_API_KEY;

function makeUrl(path, params = {}) {
  const u = new URL(BASE + path);
  u.searchParams.set("api_key", KEY);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== "") u.searchParams.set(k, v);
  }
  return u.toString();
}

function get(path, params = {}) {
  const url = makeUrl(path, params);
  const options = { method: "GET", headers: { accept: "application/json" } };
  return fetch(url, options).then((res) => {
    if (!res.ok) throw new Error("TMDB isteği başarısız: " + res.status);
    return res.json();
  });
}

export const tmdb = {
  moviesPopular:  (page = 1) => get("/movie/popular",   { page }),
  moviesTopRated: (page = 1) => get("/movie/top_rated", { page }),
  moviesUpcoming: (page = 1) => get("/movie/upcoming",  { page }),

  movieDetail: (id) => get(`/movie/${id}`, { append_to_response: "credits" }),

  tvPopular:   (page = 1) => get("/tv/popular",     { page }),
  tvTopRated:  (page = 1) => get("/tv/top_rated",   { page }),
  tvOnTheAir:  (page = 1) => get("/tv/on_the_air",  { page }),
  tvDetail:    (id)       => get(`/tv/${id}`,       { append_to_response: "credits" }),

  multiSearch: (query, page = 1) =>
    get("/search/multi", { query, page, include_adult: "false" }),

  configuration: () => get("/configuration"),
};

const IMG_BASE = (size) => `https://image.tmdb.org/t/p/${size}`;
export const posterUrl   = (path, size = "w500") => (path ? `${IMG_BASE(size)}${path}` : "");
export const backdropUrl = (path, size = "w780") => (path ? `${IMG_BASE(size)}${path}` : "");
export const profileUrl  = (path, size = "w185") => (path ? `${IMG_BASE(size)}${path}` : "");
export const originalImg = (path)                => (path ? `${IMG_BASE("original")}${path}` : "");
