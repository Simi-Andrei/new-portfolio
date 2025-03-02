import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { OverviewSection } from "./sections/overview-section";
import { MeetMeSection } from "./sections/meet-me-section";
import { CareerSection } from "./sections/career-section";
import { ProjectsSection } from "./sections/projects-section";
import { ContactSection } from "./sections/contact-section";
import { useEffect } from "react";
import { addPointerSync, removePointerSync } from "./lib/utils";

const App = () => {
  useEffect(() => {
    addPointerSync();

    return () => {
      removePointerSync();
    };
  }, []);

  return (
    <div className="w-screen min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col w-full max-w-6xl mx-auto px-2">
        <OverviewSection />
        {/* <MeetMeSection />
        <CareerSection />
        <ProjectsSection />
        <ContactSection /> */}
      </main>
      <Footer />
    </div>
  );
};

export default App;
