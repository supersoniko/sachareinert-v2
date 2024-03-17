import { Header } from "./components/header/header";
import { HeroSection } from "./landing-sections/hero";
import { PetProjectSection } from "./landing-sections/pet-project";

export default function Home() {
  return (
    <>
      <Header />
      <div>
        <HeroSection />
        <PetProjectSection />
      </div>
    </>
  );
}
