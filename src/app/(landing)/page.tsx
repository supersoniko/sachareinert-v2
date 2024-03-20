import { Footer } from "./components/footer/footer";
import { Header } from "./components/header/header";
import { ContactSection } from "./landing-sections/contact/contact";
import { ContributionsSection } from "./landing-sections/contributions";
import { HeroSection } from "./landing-sections/hero";
import { PetProjectSection } from "./landing-sections/pet-project";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col space-y-28 pt-16 md:space-y-48">
        <HeroSection />
        <PetProjectSection />
        <ContributionsSection />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
}
