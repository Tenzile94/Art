import Carousel from "./components/Banner";
import Premier from "./components/Premier";
import ArtWorks from "./components/ArtWorks";
import BlackBanner from "./components/BlackBanner";
import ExclusiveArtSection from "./components/ExclusiveArtSection";
import ModernArtExperience from "./components/ModernArtExperience";
import ContactForm from "./components/ContactForm";
import TermsAndConditions from "./components/Terms";

export default function Home() {
  return (
    <>
      <Carousel />
      <Premier />
      <BlackBanner />
      <ArtWorks />
      <ExclusiveArtSection />
      <ModernArtExperience />
      <ContactForm />
      <TermsAndConditions />
    </>
  );
}
