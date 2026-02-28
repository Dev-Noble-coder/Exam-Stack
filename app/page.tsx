import Image from "next/image";
import NavBar from './components/NavBar'
import HeroPage from "./components/HeroPage";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import HowItWorks from "./components/HowItWorks";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
    <NavBar />
    <HeroPage />  
    <ProblemSection />
    <SolutionSection />
    <HowItWorks />
    <Newsletter />
    <Footer />
    </>
  );
}
 