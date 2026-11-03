
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import RecipeSection from "./components/RecipeSection";

export default function Home() {
  return (
    <main className="w-full min-h-screen">
      <Hero />
      <AboutSection />
      <RecipeSection />
    </main>
  );
}
