import { Toaster } from "sonner";
import { contentHe } from "@/content/he";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppFab } from "@/components/WhatsAppFab";
import { Hero } from "@/sections/Hero";
import { Services } from "@/sections/Services";
import { About } from "@/sections/About";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";

export default function App() {
  const c = contentHe;

  return (
    <div className="min-h-dvh bg-[#070b18] text-white">
      <Header content={c} />
      <main>
        <Hero content={c} />
        <Services content={c} />
        <About content={c} />
        <Testimonials content={c} />
        <Contact content={c} />
      </main>
      <Footer content={c} />
      <WhatsAppFab content={c} />
      <Toaster
        richColors
        position="bottom-center"
        toastOptions={{
          classNames: {
            toast: "bg-[#0B1230] border border-white/10 text-white",
            title: "text-white",
            description: "text-white/75",
          },
        }}
      />
    </div>
  );
}

