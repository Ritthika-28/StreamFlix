import Hero from "../../components/Hero/Hero";
import MovieRow from "../../components/MovieRow/MovieRow";
import movies from "../../data/movies";

const Home = () => {
  return (
    <div>
      <Hero />

      <MovieRow
        title="🔥 Trending Now"
        movies={movies.filter(movie => movie.category === "Trending")}
      />

      <MovieRow
        title="⭐ Popular Movies"
        movies={movies.filter(movie => movie.category === "Popular")}
      />

      

      <MovieRow
        title="💥 Action Movies"
        movies={movies.filter(movie => movie.category === "Action")}
      />
    </div>
  );
};

export default Home;