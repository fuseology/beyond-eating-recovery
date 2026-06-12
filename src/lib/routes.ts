// Central route configuration for the app
// Used by both React Router and sitemap generation

export interface ImageInfo {
  src: string;
  title: string;
  caption?: string;
}

export interface RouteConfig {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  images?: ImageInfo[];
  lastmod?: string; // Optional manual override (YYYY-MM-DD)
  sourceFile?: string; // Maps to the source file for Git tracking
}

export const SITE_URL = 'https://www.beyondeatingrecovery.com';

// Image data for sitemap
const teamImages: Record<string, ImageInfo> = {
  'anne-cuthbert': { src: '/src/assets/anne-cuthbert.jpg', title: 'Anne Cuthbert, MA, LPC, LMHC - Founder & Clinical Director', caption: 'Eating disorder therapist and founder of Beyond Eating Recovery' },
  'bailey-benn': { src: '/src/assets/bailey-benn-new.webp', title: 'Bailey Benn, MA, LPC, LMHC - Licensed Professional Counselor', caption: 'LGBTQIA+ affirming eating disorder therapist' },
  'kiandra-cole': { src: '/src/assets/kiandra-cole.webp', title: 'Kiandra Cole, MA - Associate Therapist', caption: 'Eating disorder and body image therapist' },
  'rachel-bennett': { src: '/src/assets/rachel-bennett.webp', title: 'Rachel Bennett, MA - Professional Counselor Associate', caption: 'Eating disorder therapist with recovery experience' },
  'annie-calhoun-randall': { src: '/src/assets/annie-calhoun-randall-new.jpg', title: 'Annie Calhoun Randall, MA, NTP - Professional Counselor Associate', caption: 'Eating disorder therapist specializing in athletes' },
  'sara-kranich': { src: '/src/assets/sara-kranich.webp', title: 'Sara Kranich, MA - Associate Therapist', caption: 'Mindfulness-based eating disorder therapist' },
  'stephanie-okumura': { src: '/src/assets/stephanie-okumura.webp', title: 'Stephanie Okumura, MS, RDN - Registered Dietitian Nutritionist', caption: 'HAES dietitian for eating disorder recovery' },
  'michelle-commons': { src: '/src/assets/michelle-commons.webp', title: 'Michelle Commons - Admin Support', caption: 'Administrative support at Beyond Eating Recovery' },
  'michelle-meredith': { src: '/src/assets/michelle-meredith.png', title: 'Michelle Meredith - Billing Support', caption: 'Certified Professional Medical Coder' },
  'mary-cooper': { src: '/src/assets/mary-cooper.webp', title: 'Mary Cooper - Marketing Administrator', caption: 'Marketing support at Beyond Eating Recovery' },
  'emery-pederson': { src: '/src/assets/emery-pederson.webp', title: 'Emery Pederson - Admin Support', caption: 'Administrative support at Beyond Eating Recovery' },
  'mackenzie-stracke': { src: '/src/assets/mackenzie-stracke.jpg', title: 'Mackenzie Stracke - Counseling Student Intern', caption: 'Graduate counseling intern at Beyond Eating Recovery' },
};

export const routes: RouteConfig[] = [
  // Homepage
  { 
    path: '/', 
    sourceFile: 'src/pages/Index.tsx',
    priority: 1.0, 
    changefreq: 'weekly',
    images: [
      { src: '/src/assets/hero-background.jpg', title: 'Beyond Eating Recovery - Eating Disorder Treatment', caption: 'Compassionate eating disorder treatment in Portland and Vancouver' },
      { src: '/src/assets/beyond-eating-recovery-logo.png', title: 'Beyond Eating Recovery Logo', caption: 'Beyond Eating Recovery eating disorder treatment center' },
      { src: '/src/assets/not-alone-image.webp', title: 'You Are Not Alone', caption: 'Support for eating disorder recovery' },
      { src: '/src/assets/if-your-hunger-could-talk-book.jpg', title: 'If Your Hunger Could Talk Book', caption: 'Book by Anne Cuthbert on intuitive eating' },
    ]
  },
  
  // Main Pages
  { 
    path: '/about', 
    sourceFile: 'src/pages/About.tsx',
    priority: 0.9, 
    changefreq: 'monthly',
    images: Object.values(teamImages)
  },
  { path: '/services', sourceFile: 'src/pages/Services.tsx', priority: 0.9, changefreq: 'monthly', images: [{ src: '/src/assets/inclusive-therapy.jpg', title: 'Eating Disorder Therapy Services', caption: 'Individual, group, and family therapy for eating disorders' }] },
  { path: '/conditions', sourceFile: 'src/pages/Conditions.tsx', priority: 0.9, changefreq: 'monthly' },
  { path: '/our-approach', sourceFile: 'src/pages/OurApproach.tsx', priority: 0.9, changefreq: 'monthly', images: [{ src: '/src/assets/office-space.webp', title: 'Beyond Eating Recovery Office', caption: 'Welcoming therapy space in Vancouver WA' }] },
  { path: '/contact', sourceFile: 'src/pages/Contact.tsx', priority: 0.9, changefreq: 'monthly' },
  { path: '/resources', sourceFile: 'src/pages/Resources.tsx', priority: 0.8, changefreq: 'weekly' },
  { path: '/faq', sourceFile: 'src/pages/FAQ.tsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/workshop', sourceFile: 'src/pages/Workshop.tsx', priority: 0.8, changefreq: 'monthly', images: [{ src: '/src/assets/workshop-hero.jpg', title: 'Loveable At Any Size Workshop', caption: 'Body acceptance and self-compassion workshop' }] },
  { path: '/careers', sourceFile: 'src/pages/Careers.tsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/philosophy', sourceFile: 'src/pages/Philosophy.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/health-at-every-size', sourceFile: 'src/pages/HealthAtEverySize.tsx', priority: 0.8, changefreq: 'monthly', images: [{ src: '/src/assets/benefits-wellness.webp', title: 'Health At Every Size Approach', caption: 'HAES weight-neutral approach to eating disorder treatment' }] },
  { path: '/privacy-notice', sourceFile: 'src/pages/PrivacyNotice.tsx', priority: 0.3, changefreq: 'yearly' },
  { path: '/secure-file-submissions', sourceFile: 'src/pages/SecureFileSubmissions.tsx', priority: 0.5, changefreq: 'yearly' },
  
  // Team Members
  { path: '/about/anne-cuthbert', sourceFile: 'src/pages/about/AnneCuthbert.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['anne-cuthbert']] },
  { path: '/about/bailey-benn', sourceFile: 'src/pages/about/BaileyBenn.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['bailey-benn']] },
  { path: '/about/kiandra-cole', sourceFile: 'src/pages/about/KiandraCole.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['kiandra-cole']] },
  { path: '/about/rachel-bennett', sourceFile: 'src/pages/about/RachelBennett.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['rachel-bennett']] },
  { path: '/about/annie-calhoun-randall', sourceFile: 'src/pages/about/AnnieCalhounRandall.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['annie-calhoun-randall']] },
  { path: '/about/sara-kranich', sourceFile: 'src/pages/about/SaraKranich.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['sara-kranich']] },
  { path: '/about/stephanie-okumura', sourceFile: 'src/pages/about/StephanieOkumura.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['stephanie-okumura']] },
  { path: '/about/michelle-commons', sourceFile: 'src/pages/about/MichelleCommons.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['michelle-commons']] },
  { path: '/about/michelle-meredith', sourceFile: 'src/pages/about/MichelleMeredith.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['michelle-meredith']] },
  { path: '/about/mary-cooper', sourceFile: 'src/pages/about/MaryCooper.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['mary-cooper']] },
  { path: '/about/emery-pederson', sourceFile: 'src/pages/about/EmeryPederson.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['emery-pederson']] },
  { path: '/about/mackenzie-stracke', sourceFile: 'src/pages/about/MackenzieStracke.tsx', priority: 0.7, changefreq: 'monthly', images: [teamImages['mackenzie-stracke']] },
  
  // Conditions Pages
  { path: '/conditions/anorexia-nervosa', sourceFile: 'src/pages/conditions/AnorexiaNervosa.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/bulimia-nervosa', sourceFile: 'src/pages/conditions/BulimiaNervosa.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/binge-eating-disorder', sourceFile: 'src/pages/conditions/BingeEatingDisorder.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/co-occurring-issues', sourceFile: 'src/pages/conditions/CoOccurringIssues.tsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/conditions/arfid', sourceFile: 'src/pages/conditions/ARFID.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/osfed', sourceFile: 'src/pages/conditions/OSFED.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/orthorexia', sourceFile: 'src/pages/conditions/Orthorexia.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/atypical-anorexia', sourceFile: 'src/pages/conditions/AtypicalAnorexia.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/disordered-eating', sourceFile: 'src/pages/conditions/DisorderedEating.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/emotional-eating', sourceFile: 'src/pages/conditions/EmotionalEating.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/body-dysmorphia', sourceFile: 'src/pages/conditions/BodyDysmorphia.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/exercise-addiction', sourceFile: 'src/pages/conditions/ExerciseAddiction.tsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/conditions/men-eating-disorders', sourceFile: 'src/pages/conditions/MenEatingDisorders.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/lgbtqia-eating-disorders', sourceFile: 'src/pages/conditions/LGBTQIAEatingDisorders.tsx', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/athletes-eating-disorders', sourceFile: 'src/pages/conditions/AthletesEatingDisorders.tsx', priority: 0.8, changefreq: 'monthly' },
  
  // Resource Articles
  { path: '/battle-of-the-binge', sourceFile: 'src/pages/BattleOfTheBinge.tsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/body-shame', sourceFile: 'src/pages/BodyShame.tsx', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/5-steps-diet-roller-coaster', sourceFile: 'src/pages/FiveStepsDietRollerCoaster.tsx', priority: 0.7, changefreq: 'monthly' },
  
  // Audio Resources
  { path: '/resources/move-toward-your-emotions', sourceFile: 'src/pages/resources/MoveTowardYourEmotions.tsx', priority: 0.7, changefreq: 'monthly' },

  // Hub Page
  { path: '/connect', sourceFile: 'src/pages/Connect.tsx', priority: 0.8, changefreq: 'monthly' },
];

// Helper to get all images for sitemap generation
export const getAllImages = (): Array<{ pageUrl: string; image: ImageInfo }> => {
  const allImages: Array<{ pageUrl: string; image: ImageInfo }> = [];
  
  routes.forEach(route => {
    if (route.images) {
      route.images.forEach(image => {
        allImages.push({ pageUrl: route.path, image });
      });
    }
  });
  
  return allImages;
};
