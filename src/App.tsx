import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Conditions from "./pages/Conditions";
import Philosophy from "./pages/Philosophy";
import Workshop from "./pages/Workshop";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import NotFound from "./pages/NotFound";
import AnneCuthbert from "./pages/about/AnneCuthbert";
import BaileyBenn from "./pages/about/BaileyBenn";
import AlyssaPataki from "./pages/about/AlyssaPataki";
import KiandraCole from "./pages/about/KiandraCole";
import RachelBennett from "./pages/about/RachelBennett";
import AnnieCalhounRandall from "./pages/about/AnnieCalhounRandall";
import SaraKranich from "./pages/about/SaraKranich";
import StephanieOkumura from "./pages/about/StephanieOkumura";
import MichelleCommons from "./pages/about/MichelleCommons";
import MichelleSullins from "./pages/about/MichelleSullins";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/anne-cuthbert" element={<AnneCuthbert />} />
          <Route path="/about/bailey-benn" element={<BaileyBenn />} />
          <Route path="/about/alyssa-pataki" element={<AlyssaPataki />} />
          <Route path="/about/kiandra-cole" element={<KiandraCole />} />
          <Route path="/about/rachel-bennett" element={<RachelBennett />} />
          <Route path="/about/annie-calhoun-randall" element={<AnnieCalhounRandall />} />
          <Route path="/about/sara-kranich" element={<SaraKranich />} />
          <Route path="/about/stephanie-okumura" element={<StephanieOkumura />} />
          <Route path="/about/michelle-commons" element={<MichelleCommons />} />
          <Route path="/about/michelle-sullins" element={<MichelleSullins />} />
          <Route path="/services" element={<Services />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
