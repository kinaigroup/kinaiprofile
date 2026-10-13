import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutPhilosophy from '@/components/AboutPhilosophy';
import PurposeVisionMission from '@/components/PurposeVisionMission';
import BusinessSectors from '@/components/BusinessSectors';
import KinaiDna from '@/components/KinaiDna';
import ResearchAndDevelopment from '@/components/ResearchAndDevelopment';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import LoginModal from '@/components/LoginModal';
import { AuthProvider } from '@/context/AuthContext';

export default function HomePage() {
  return (
    <AuthProvider>
      <div className="min-h-screen flex flex-col bg-[#FAFAF9] text-stone-900">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <AboutPhilosophy />
          <PurposeVisionMission />
          <BusinessSectors />
          <KinaiDna />
          <ResearchAndDevelopment />
          <ContactSection />
        </main>
        <Footer />
        <LoginModal />
      </div>
    </AuthProvider>
  );
}
