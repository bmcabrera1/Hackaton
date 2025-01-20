import CoverParticles from "../components/cover-particles";
import PopularMovies from "../components/PopularMovies";
import TransitionPage from "../components/transition-page";

export default function MoreData() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repear bg-gradient-cover">
        <CoverParticles />
        <PopularMovies />
      </div>
    </main>
  );
}
