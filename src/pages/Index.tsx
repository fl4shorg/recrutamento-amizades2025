
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Benefits from "@/components/Benefits";
import VideoSection from "@/components/VideoSection";
import RecruitmentForm from "@/components/RecruitmentForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <VideoSection />
      <Benefits />
      <RecruitmentForm />
      <Footer />
    </main>
  );
};

export default Index;
