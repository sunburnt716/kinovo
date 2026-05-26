import Hero from "../../../components/landing/Hero";
import ProblemSection from "../../../components/landing/ProblemSection";
import PublicSiteShell from "../../../components/landing/PublicSiteShell";
import ResearchSection from "../../../components/landing/ResearchSection";
import SolutionsSection from "../../../components/landing/SolutionsSection";

function LandingPage() {
  return (
    <PublicSiteShell>
      <main>
        <Hero />
        <ProblemSection />
        <SolutionsSection />
        <ResearchSection />
      </main>
    </PublicSiteShell>
  );
}

export default LandingPage;
