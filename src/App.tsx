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
import HealthAtEverySize from "./pages/HealthAtEverySize";
import OurApproach from "./pages/OurApproach";
import Workshop from "./pages/Workshop";
import Contact from "./pages/Contact";
import Resources from "./pages/Resources";
import FAQ from "./pages/FAQ";
import BattleOfTheBinge from "./pages/BattleOfTheBinge";
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
import MaryCooper from "./pages/about/MaryCooper";
import Careers from "./pages/Careers";
import AnorexiaNervosa from "./pages/conditions/AnorexiaNervosa";
import BulimiaNervosa from "./pages/conditions/BulimiaNervosa";
import BingeEatingDisorder from "./pages/conditions/BingeEatingDisorder";
import CoOccurringIssues from "./pages/conditions/CoOccurringIssues";
import ARFID from "./pages/conditions/ARFID";
import OSFED from "./pages/conditions/OSFED";
import Orthorexia from "./pages/conditions/Orthorexia";
import AtypicalAnorexia from "./pages/conditions/AtypicalAnorexia";
import DisorderedEating from "./pages/conditions/DisorderedEating";
import EmotionalEating from "./pages/conditions/EmotionalEating";
import BodyShame from "./pages/BodyShame";
import BodyDysmorphia from "./pages/conditions/BodyDysmorphia";

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
          <Route path="/about/mary-cooper" element={<MaryCooper />} />
          <Route path="/services" element={<Services />} />
          <Route path="/conditions" element={<Conditions />} />
          <Route path="/philosophy" element={<Philosophy />} />
          <Route path="/health-at-every-size" element={<HealthAtEverySize />} />
          <Route path="/our-approach" element={<OurApproach />} />
          <Route path="/workshop" element={<Workshop />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/battle-of-the-binge" element={<BattleOfTheBinge />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/conditions/anorexia-nervosa" element={<AnorexiaNervosa />} />
          <Route path="/conditions/bulimia-nervosa" element={<BulimiaNervosa />} />
          <Route path="/conditions/binge-eating-disorder" element={<BingeEatingDisorder />} />
          <Route path="/conditions/co-occurring-issues" element={<CoOccurringIssues />} />
          <Route path="/conditions/arfid" element={<ARFID />} />
          <Route path="/conditions/osfed" element={<OSFED />} />
          <Route path="/conditions/orthorexia" element={<Orthorexia />} />
          <Route path="/conditions/atypical-anorexia" element={<AtypicalAnorexia />} />
          <Route path="/conditions/disordered-eating" element={<DisorderedEating />} />
          <Route path="/conditions/emotional-eating" element={<EmotionalEating />} />
          <Route path="/conditions/body-dysmorphia" element={<BodyDysmorphia />} />
          <Route path="/body-shame" element={<BodyShame />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
