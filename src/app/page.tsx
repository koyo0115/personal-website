import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import ActivityPillars from "@/components/ActivityPillars";
import WeeklyRituals from "@/components/WeeklyRituals";
import VisualVibe from "@/components/VisualVibe";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-black selection:bg-white selection:text-black">
            <Header />
            <Hero />
            <Philosophy />
            <ActivityPillars />
            <WeeklyRituals />
            <VisualVibe />
            <Footer />
        </main>
    );
}
