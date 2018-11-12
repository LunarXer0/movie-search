export const API_KEY = "a5326823e52c473ffda44ace64b7d44d";

export async function getMovie() {
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/339403?api_key=${API_KEY}&language=en-US`
  );
  const { results } = await res.json();
  console.log(results);
}
