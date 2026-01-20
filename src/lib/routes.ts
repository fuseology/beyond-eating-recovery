// Central route configuration for the app
// Used by both React Router and sitemap generation

export interface RouteConfig {
  path: string;
  priority: number;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
}

export const routes: RouteConfig[] = [
  // Homepage
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  
  // Main Pages
  { path: '/about', priority: 0.9, changefreq: 'monthly' },
  { path: '/services', priority: 0.9, changefreq: 'monthly' },
  { path: '/conditions', priority: 0.9, changefreq: 'monthly' },
  { path: '/our-approach', priority: 0.9, changefreq: 'monthly' },
  { path: '/contact', priority: 0.9, changefreq: 'monthly' },
  { path: '/resources', priority: 0.8, changefreq: 'weekly' },
  { path: '/faq', priority: 0.7, changefreq: 'monthly' },
  { path: '/workshop', priority: 0.8, changefreq: 'monthly' },
  { path: '/careers', priority: 0.7, changefreq: 'monthly' },
  { path: '/philosophy', priority: 0.8, changefreq: 'monthly' },
  { path: '/health-at-every-size', priority: 0.8, changefreq: 'monthly' },
  { path: '/privacy-notice', priority: 0.3, changefreq: 'yearly' },
  { path: '/secure-file-submissions', priority: 0.5, changefreq: 'yearly' },
  
  // Team Members
  { path: '/about/anne-cuthbert', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/bailey-benn', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/alyssa-pataki', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/kiandra-cole', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/rachel-bennett', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/annie-calhoun-randall', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/sara-kranich', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/stephanie-okumura', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/michelle-commons', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/michelle-meredith', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/mary-cooper', priority: 0.7, changefreq: 'monthly' },
  { path: '/about/emery-pederson', priority: 0.7, changefreq: 'monthly' },
  
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

export const SITE_URL = 'https://www.beyondeatingrecovery.com';
