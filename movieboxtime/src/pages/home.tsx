import CoverParticles from "../components/cover-particles";
import Page from "../components/page";
import TransitionPage from "../components/transition-page";

export default function Home() {
  return (
    <main>
      <TransitionPage />
      <div className="flex min-h-[100vh] h-full bg-no-repear bg-gradient-cover">
        <CoverParticles />
        <Page />
      </div>
    </main>
  );
}
