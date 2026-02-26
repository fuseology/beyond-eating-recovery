import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Download, Phone, Mail } from "lucide-react";
import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import Footer from "@/components/Footer";
import NewsletterFooterSection from "@/components/NewsletterFooterSection";
import Breadcrumbs from "@/components/Breadcrumbs";

const PrivacyNotice = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "MedicalOrganization",
         "@id": "https://www.beyondeatingrecovery.com/#organization",
         "name": "Beyond Eating Recovery",
         "url": "https://www.beyondeatingrecovery.com",
         "logo": "https://www.beyondeatingrecovery.com/logo.png",
        "description": "Compassionate eating disorder treatment in Portland, OR & Vancouver, WA",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "1235 SE Division Street, Suite 104",
            "addressLocality": "Portland",
            "addressRegion": "OR",
            "postalCode": "97202",
            "addressCountry": "US"
          },
          {
            "@type": "PostalAddress",
            "streetAddress": "400 E. Evergreen Blvd, Suite 309",
            "addressLocality": "Vancouver",
            "addressRegion": "WA",
            "postalCode": "98660",
            "addressCountry": "US"
          }
        ],
        "telephone": "+1-360-726-4141",
        "email": "info@beyondeating.com",
        "medicalSpecialty": "Eating Disorder Treatment",
        "areaServed": ["Portland, OR", "Vancouver, WA"]
      },
      {
        "@type": "WebPage",
         "@id": "https://www.beyondeatingrecovery.com/privacy-notice#webpage",
         "url": "https://www.beyondeatingrecovery.com/privacy-notice",
         "name": "HIPAA Notice of Privacy Practices | Beyond Eating Recovery",
         "description": "Review Beyond Eating Recovery's HIPAA Notice of Privacy Practices. Learn about your rights, how we protect your health information, and download the full notice.",
         "isPartOf": { "@id": "https://www.beyondeatingrecovery.com/#website" },
         "about": { "@id": "https://www.beyondeatingrecovery.com/#organization" },
        "datePublished": "2013-09-22",
        "dateModified": "2025-01-01",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
             { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.beyondeatingrecovery.com", "name": "Home" } },
             { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.beyondeatingrecovery.com/resources", "name": "Resources" } },
             { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.beyondeatingrecovery.com/privacy-notice", "name": "Notice of Privacy Practices" } }
           ]
        }
      },
      {
        "@type": "WebSite",
         "@id": "https://www.beyondeatingrecovery.com/#website",
         "url": "https://www.beyondeatingrecovery.com",
         "name": "Beyond Eating Recovery",
         "publisher": { "@id": "https://www.beyondeatingrecovery.com/#organization" }
       }
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>HIPAA Notice of Privacy Practices | Beyond Eating Recovery</title>
        <meta name="description" content="Review Beyond Eating Recovery's HIPAA Notice of Privacy Practices. Learn about your rights, how we protect your health information, and download the full notice." />
        <meta name="keywords" content="HIPAA privacy notice, patient privacy rights, medical records access, health information privacy, Beyond Eating Recovery privacy policy, Vancouver WA therapist privacy, Portland OR eating disorder privacy" />
        <link rel="canonical" href="https://www.beyondeatingrecovery.com/privacy-notice" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="HIPAA Notice of Privacy Practices | Beyond Eating Recovery" />
        <meta property="og:description" content="Learn about your HIPAA rights and how we protect your health information." />
        <meta property="og:url" content="https://www.beyondeatingrecovery.com/privacy-notice" />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>
      
      <BreadcrumbSchema />
      <Header />
      <Breadcrumbs />

      <div className="container mx-auto px-4 py-12 max-w-[900px]">
        {/* Page Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            HIPAA Notice of Privacy Practices
          </h1>
          <p className="text-xl md:text-2xl font-semibold text-foreground mb-6">
            Your Information. Your Rights. Our Responsibilities.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This notice describes how medical information about you may be used and disclosed
            and how you can get access to this information.{" "}
            <strong className="text-foreground">Please review it carefully.</strong>
          </p>
        </header>

        {/* Primary Download CTA */}
        <section className="mb-12">
          <div className="bg-accent/20 border-2 border-primary rounded-lg p-6 text-center">
            <a
              href="/documents/Beyond-Eating-Recovery-Privacy-Notice.pdf"
              download="Beyond-Eating-Recovery-Privacy-Notice.pdf"
              className="inline-block"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-6 text-lg transition-all hover:-translate-y-1 hover:shadow-lg">
                <Download className="mr-2 h-5 w-5" />
                Download Full Privacy Notice (PDF)
              </Button>
            </a>
            <p className="text-sm text-muted-foreground mt-4">
              Notice Effective Date: September 22, 2013 | Format: PDF
            </p>
          </div>
        </section>

        {/* Content Sections */}
        <article className="space-y-12">

          {/* Your Rights - Summary */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Your Rights</h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              When it comes to your health information, you have certain rights. You have the right to:
            </p>
            <ul className="space-y-3 text-base text-foreground leading-relaxed">
              {[
                "Get a copy of your paper or electronic medical record",
                "Correct your paper or electronic medical record",
                "Request confidential communication",
                "Ask us to limit the information we share",
                "Get a list of those with whom we've shared your information",
                "Get a copy of this privacy notice",
                "Choose someone to act for you",
                "File a complaint if you believe your privacy rights have been violated",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Your Rights - Detailed */}
          <section className="space-y-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Your Rights in Detail</h2>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Get an electronic or paper copy of your medical record</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>You can ask to see or get an electronic or paper copy of your medical record and other health information we have about you. Ask us how to do this.</li>
                <li>We will provide a copy or a summary of your health information, usually within 30 days of your request. We may charge a reasonable, cost-based fee.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ask us to correct your medical record</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>You can ask us to correct health information about you that you think is incorrect or incomplete. Ask us how to do this.</li>
                <li>We may say "no" to your request, but we'll tell you why in writing within 60 days.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Request confidential communications</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>You can ask us to contact you in a specific way (for example, home or office phone) or to send mail to a different address.</li>
                <li>We will say "yes" to all reasonable requests.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Ask us to limit what we use or share</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>You can ask us not to use or share certain health information for treatment, payment, or our operations. We are not required to agree to your request, and we may say "no" if it would affect your care.</li>
                <li>If you pay for a service or health care item out-of-pocket in full, you can ask us not to share that information for the purpose of payment or our operations with your health insurer. We will say "yes" unless a law requires us to share that information.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Get a list of those with whom we've shared information</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>You can ask for a list (accounting) of the times we've shared your health information for six years prior to the date you ask, who we shared it with, and why.</li>
                <li>We will include all the disclosures except for those about treatment, payment, and health care operations, and certain other disclosures (such as any you asked us to make). We'll provide one accounting a year for free but will charge a reasonable, cost-based fee if you ask for another one within 12 months.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Get a copy of this privacy notice</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                You can ask for a paper copy of this notice at any time, even if you have agreed to receive the notice electronically. We will provide you with a paper copy promptly.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Choose someone to act for you</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>If you have given someone medical power of attorney or if someone is your legal guardian, that person can exercise your rights and make choices about your health information.</li>
                <li>We will make sure the person has this authority and can act for you before we take any action.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">File a complaint if you feel your rights are violated</h3>
              <ul className="space-y-2 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>You can complain if you feel we have violated your rights by contacting us using the information below.</li>
                <li>You can file a complaint with the U.S. Department of Health and Human Services Office for Civil Rights by sending a letter to 200 Independence Avenue, S.W., Washington, D.C. 20201, calling 1-877-696-6775, or visiting <a href="https://www.hhs.gov/ocr/privacy/hipaa/complaints/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hhs.gov/ocr/privacy/hipaa/complaints/</a>.</li>
                <li>We will not retaliate against you for filing a complaint.</li>
              </ul>
            </div>
          </section>

          {/* Your Choices */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary mb-4">Your Choices</h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              For certain health information, you can tell us your choices about what we share. If you have a clear preference for how we share your information in the situations described below, talk to us. Tell us what you want us to do, and we will follow your instructions.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">In these cases, you have both the right and choice to tell us to:</h3>
              <ul className="space-y-2 text-base text-foreground leading-relaxed">
                {[
                  "Share information with your family, close friends, or others involved in your care",
                  "Share information in a disaster relief situation",
                  "Include your information in a hospital directory",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-base text-muted-foreground mt-3 leading-relaxed">
                If you are not able to tell us your preference, for example if you are unconscious, we may go ahead and share your information if we believe it is in your best interest. We may also share your information when needed to lessen a serious and imminent threat to health or safety.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">In these cases we never share your information unless you give us written permission:</h3>
              <ul className="space-y-2 text-base text-foreground leading-relaxed">
                {[
                  "Marketing purposes",
                  "Sale of your information",
                  "Most sharing of psychotherapy notes",
                ].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">In the case of fundraising:</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We may contact you for fundraising efforts, but you can tell us not to contact you again.
              </p>
            </div>
          </section>

          {/* Our Uses and Disclosures */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary mb-4">Our Uses and Disclosures</h2>
            <p className="text-base text-muted-foreground mb-4 leading-relaxed">
              We typically use or share your health information in the following ways.
            </p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Treat you</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We can use your health information and share it with other professionals who are treating you.
              </p>
              <p className="text-sm text-muted-foreground italic mt-1">Example: A doctor treating you for an injury asks another doctor about your overall health condition.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Run our organization</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We can use and share your health information to run our practice, improve your care, and contact you when necessary.
              </p>
              <p className="text-sm text-muted-foreground italic mt-1">Example: We use health information about you to manage your treatment and services.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Bill for your services</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                We can use and share your health information to bill and get payment from health plans or other entities.
              </p>
              <p className="text-sm text-muted-foreground italic mt-1">Example: We give information about you to your health insurance plan so it will pay for your services.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">How else can we use or share your health information?</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-3">
                We are allowed or required to share your information in other ways – usually in ways that contribute to the public good, such as public health and research. We have to meet many conditions in the law before we can share your information for these purposes. For more information see: <a href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/index.html</a>.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Help with public health and safety issues</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">We can share health information about you for certain situations such as:</p>
              <ul className="space-y-1 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>Preventing disease</li>
                <li>Helping with product recalls</li>
                <li>Reporting adverse reactions to medications</li>
                <li>Reporting suspected abuse, neglect, or domestic violence</li>
                <li>Preventing or reducing a serious threat to anyone's health or safety</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Do research</h3>
              <p className="text-base text-muted-foreground leading-relaxed">We can use or share your information for health research.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Comply with the law</h3>
              <p className="text-base text-muted-foreground leading-relaxed">We will share information about you if state or federal laws require it, including with the Department of Health and Human Services if it wants to see that we're complying with federal privacy law.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Respond to organ and tissue donation requests</h3>
              <p className="text-base text-muted-foreground leading-relaxed">We can share health information about you with organ procurement organizations.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Work with a medical examiner or funeral director</h3>
              <p className="text-base text-muted-foreground leading-relaxed">We can share health information with a coroner, medical examiner, or funeral director when an individual dies.</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Address workers' compensation, law enforcement, and other government requests</h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-2">We can use or share health information about you:</p>
              <ul className="space-y-1 text-base text-muted-foreground leading-relaxed list-disc list-inside">
                <li>For workers' compensation claims</li>
                <li>For law enforcement purposes or with a law enforcement official</li>
                <li>With health oversight agencies for activities authorized by law</li>
                <li>For special government functions such as military, national security, and presidential protective services</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-1">Respond to lawsuits and legal actions</h3>
              <p className="text-base text-muted-foreground leading-relaxed">We can share health information about you in response to a court or administrative order, or in response to a subpoena.</p>
            </div>
          </section>

          {/* 42 CFR Part 2 */}
          <section className="space-y-6">
            <h2 className="text-3xl font-bold text-primary mb-4">Records Subject to Additional Federal Protections</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We may receive records from other providers that are protected by a federal law called 42 CFR Part 2, which applies to certain substance use disorder treatment records. When we receive such records:
            </p>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Limits on Use and Disclosure</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Unlike other protected health information, records subject to 42 CFR Part 2 generally may not be used or disclosed for treatment, payment, or health care operations without the individual's written consent, except as permitted by law.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Restrictions on Legal Use</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Records protected by 42 CFR Part 2, and any testimony relaying the content of such records, may not be used or disclosed in civil, criminal, administrative, or legislative proceedings against the individual without written consent or a court order that meets federal requirements.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-foreground mb-2">Redisclosure</h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                Information disclosed to us that is subject to 42 CFR Part 2 may carry restrictions on further use or disclosure. We will comply with those restrictions as required by law.
              </p>
            </div>
          </section>

          {/* Our Responsibilities */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Our Responsibilities</h2>
            <ul className="space-y-3 text-base text-foreground leading-relaxed">
              {[
                "We are required by law to maintain the privacy and security of your protected health information.",
                "We will let you know promptly if a breach occurs that may have compromised the privacy or security of your information.",
                "We must follow the duties and privacy practices described in this notice and give you a copy of it.",
                "We will not use or share your information other than as described here unless you tell us we can in writing. If you tell us we can, you may change your mind at any time. Let us know in writing if you change your mind.",
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="text-orange-500 mr-3 mt-1 flex-shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-base text-muted-foreground mt-4 leading-relaxed">
              For more information see: <a href="https://www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">www.hhs.gov/ocr/privacy/hipaa/understanding/consumers/noticepp.html</a>.
            </p>
          </section>

          {/* Changes to Terms */}
          <section>
            <h2 className="text-3xl font-bold text-primary mb-4">Changes to the Terms of this Notice</h2>
            <p className="text-base text-muted-foreground leading-relaxed">
              We can change the terms of this notice, and the changes will apply to all information we have about you. The new notice will be available upon request, in our office, and on our web site.
            </p>
          </section>
        </article>

        {/* Contact Section */}
        <section className="my-12 bg-card border border-border rounded-lg p-8">
          <h2 className="text-3xl font-bold text-primary mb-6">Questions About Your Privacy?</h2>
          <p className="text-base text-muted-foreground mb-6 leading-relaxed">
            If you have questions about this notice or your privacy rights, please contact our Privacy Officer:
          </p>
          <div className="space-y-4 text-base text-foreground">
            <div>
              <p className="font-semibold text-lg mb-1">Privacy Officer: Anne Cuthbert, M.A. LPC</p>
              <p className="text-muted-foreground">Beyond Eating Recovery</p>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <span className="font-semibold">Phone:</span>
              <a href="tel:3607264141" className="text-primary hover:underline">(360) 726-4141</a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <span className="font-semibold">Email:</span>
              <a href="mailto:anne@beyondeatingrecovery.com" className="text-primary hover:underline">anne@beyondeatingrecovery.com</a>
            </div>
          </div>
        </section>

        {/* Footer Download CTA */}
        <section className="text-center py-8">
          <p className="text-lg text-muted-foreground mb-4">Ready to download the full notice?</p>
          <a
            href="/documents/Beyond-Eating-Recovery-Privacy-Notice.pdf"
            download="Beyond-Eating-Recovery-Privacy-Notice.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              <Download className="mr-2 h-5 w-5" />
              Download Privacy Notice (PDF)
            </Button>
          </a>
        </section>
      </div>

      <NewsletterFooterSection />
      <Footer />
    </div>
  );
};

export default PrivacyNotice;
