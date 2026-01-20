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
}

export const SITE_URL = 'https://www.beyondeatingrecovery.com';

// Image data for sitemap
const teamImages: Record<string, ImageInfo> = {
  'anne-cuthbert': { src: '/src/assets/anne-cuthbert.jpg', title: 'Anne Cuthbert, MA, LPC, LMHC - Founder & Clinical Director', caption: 'Eating disorder therapist and founder of Beyond Eating Recovery' },
  'bailey-benn': { src: '/src/assets/bailey-benn-new.webp', title: 'Bailey Benn, MA, LPC, LMHC - Licensed Professional Counselor', caption: 'LGBTQIA+ affirming eating disorder therapist' },
  'alyssa-pataki': { src: '/src/assets/alyssa-pataki.webp', title: 'Alyssa Pataki, MA, LMFT - Licensed Marriage & Family Therapist', caption: 'Eating disorder and couples therapist' },
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
    priority: 0.9, 
    changefreq: 'monthly',
    images: Object.values(teamImages)
  },
  { path: '/services', priority: 0.9, changefreq: 'monthly', images: [{ src: '/src/assets/inclusive-therapy.jpg', title: 'Eating Disorder Therapy Services', caption: 'Individual, group, and family therapy for eating disorders' }] },
  { path: '/conditions', priority: 0.9, changefreq: 'monthly' },
  { path: '/our-approach', priority: 0.9, changefreq: 'monthly', images: [{ src: '/src/assets/office-space.webp', title: 'Beyond Eating Recovery Office', caption: 'Welcoming therapy space in Vancouver WA' }] },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  { path: '/resources', priority: 0.8, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/workshop', priority: 0.8, changefreq: 'monthly', images: [{ src: '/src/assets/workshop-hero.jpg', title: 'Loveable At Any Size Workshop', caption: 'Body acceptance and self-compassion workshop' }] },
  { path: '/careers', priority: 0.7, changefreq: 'monthly' },
  { path: '/philosophy', priority: 0.8, changefreq: 'monthly' },
  { path: '/health-at-every-size', priority: 0.8, changefreq: 'monthly', images: [{ src: '/src/assets/benefits-wellness.webp', title: 'Health At Every Size Approach', caption: 'HAES weight-neutral approach to eating disorder treatment' }] },
  { path: '/privacy-notice', priority: 0.3, changefreq: 'yearly' },
  { path: '/secure-file-submissions', priority: 0.5, changefreq: 'yearly' },
  
  // Team Members
  { path: '/about/anne-cuthbert', priority: 0.7, changefreq: 'monthly', images: [teamImages['anne-cuthbert']] },
  { path: '/about/bailey-benn', priority: 0.7, changefreq: 'monthly', images: [teamImages['bailey-benn']] },
  { path: '/about/alyssa-pataki', priority: 0.7, changefreq: 'monthly', images: [teamImages['alyssa-pataki']] },
  { path: '/about/kiandra-cole', priority: 0.7, changefreq: 'monthly', images: [teamImages['kiandra-cole']] },
  { path: '/about/rachel-bennett', priority: 0.7, changefreq: 'monthly', images: [teamImages['rachel-bennett']] },
  { path: '/about/annie-calhoun-randall', priority: 0.7, changefreq: 'monthly', images: [teamImages['annie-calhoun-randall']] },
  { path: '/about/sara-kranich', priority: 0.7, changefreq: 'monthly', images: [teamImages['sara-kranich']] },
  { path: '/about/stephanie-okumura', priority: 0.7, changefreq: 'monthly', images: [teamImages['stephanie-okumura']] },
  { path: '/about/michelle-commons', priority: 0.7, changefreq: 'monthly', images: [teamImages['michelle-commons']] },
  { path: '/about/michelle-meredith', priority: 0.7, changefreq: 'monthly', images: [teamImages['michelle-meredith']] },
  { path: '/about/mary-cooper', priority: 0.7, changefreq: 'monthly', images: [teamImages['mary-cooper']] },
  { path: '/about/emery-pederson', priority: 0.7, changefreq: 'monthly', images: [teamImages['emery-pederson']] },
  { path: '/about/mackenzie-stracke', priority: 0.7, changefreq: 'monthly', images: [teamImages['mackenzie-stracke']] },
  
  // Conditions Pages
  { path: '/conditions/anorexia-nervosa', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/bulimia-nervosa', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/binge-eating-disorder', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/co-occurring-issues', priority: 0.7, changefreq: 'monthly' },
  { path: '/conditions/arfid', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/osfed', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/orthorexia', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/atypical-anorexia', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/disordered-eating', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/emotional-eating', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/body-dysmorphia', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/exercise-addiction', priority: 0.7, changefreq: 'monthly' },
  { path: '/conditions/men-eating-disorders', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/lgbtqia-eating-disorders', priority: 0.8, changefreq: 'monthly' },
  { path: '/conditions/athletes-eating-disorders', priority: 0.8, changefreq: 'monthly' },
  
  // Resource Articles
  { path: '/battle-of-the-binge', priority: 0.7, changefreq: 'monthly' },
  { path: '/body-shame', priority: 0.7, changefreq: 'monthly' },
  { path: '/resources/5-steps-diet-roller-coaster', priority: 0.7, changefreq: 'monthly' },
  
  // Audio Resources
  { path: '/resources/move-toward-your-emotions', priority: 0.7, changefreq: 'monthly' },
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
