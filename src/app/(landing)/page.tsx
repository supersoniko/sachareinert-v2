import { Header } from "./components/header";
import { HeroSection } from "./landing-sections/hero";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
      </div>
    </>
  );
}
