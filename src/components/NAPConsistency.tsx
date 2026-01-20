/**
 * NAP (Name, Address, Phone) Consistency Component
 * 
 * This component provides standardized business information for consistent
 * display across the website, which is critical for local SEO and Google
 * Business Profile optimization.
 * 
 * GOOGLE BUSINESS PROFILE INTEGRATION GUIDE:
 * ==========================================
 * 
 * 1. BUSINESS NAME CONSISTENCY
 *    - Primary Name: "Beyond Eating Recovery"
 *    - Use this exact name everywhere (website, GBP, citations, social)
 *    - Avoid variations like "Beyond Eating" or "BER"
 * 
 * 2. ADDRESS CONSISTENCY
 *    Portland Location:
 *    - 1235 SE Division Street, Suite 104
 *    - Portland, OR 97202
 *    - United States
 * 
 *    Vancouver Location:
 *    - 400 E. Evergreen Blvd, Suite 309
 *    - Vancouver, WA 98660
 *    - United States
 * 
 * 3. PHONE NUMBER CONSISTENCY
 *    - Primary: (360) 726-4141
 *    - Format: Use consistent format across all platforms
 *    - International: +1-360-726-4141
 * 
 * 4. BUSINESS CATEGORIES (GBP)
 *    - Primary: Mental Health Service
 *    - Secondary: Counseling Service, Therapist
 * 
 * 5. BUSINESS HOURS
 *    Monday – Friday: 9:00 AM – 6:00 PM
 *    Saturday: By appointment
 *    Sunday: Closed
 * 
 * 6. SERVICE AREAS
 *    - Portland, OR (30-mile radius)
 *    - Vancouver, WA (30-mile radius)
 *    - Oregon (telehealth)
 *    - Washington (telehealth)
 * 
 * 7. CITATIONS TO MAINTAIN
 *    - Google Business Profile
 *    - Bing Places
 *    - Yelp
 *    - Psychology Today
 *    - Healthgrades
 *    - Facebook Business Page
 *    - Apple Maps
 * 
 * USAGE:
 * Import { NAP_DATA, NAPAddress, NAPPhone, NAPBusinessName } from this file
 * to ensure consistent NAP information across all pages.
 */

import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Centralized NAP (Name, Address, Phone) Data
export const NAP_DATA = {
  businessName: "Beyond Eating Recovery",
  businessNameFull: "Beyond Eating Recovery of Portland",
  phone: "(360) 726-4141",
  phoneInternational: "+1-360-726-4141",
  phoneRaw: "3607264141",
  email: "info@beyondeating.com",
  website: "https://www.beyondeatingrecovery.com",
  
  locations: {
    portland: {
      name: "Portland Office",
      street: "1235 SE Division Street, Suite 104",
      city: "Portland",
      state: "OR",
      stateFullName: "Oregon",
      zip: "97202",
      country: "United States",
      countryCode: "US",
      fullAddress: "1235 SE Division Street, Suite 104, Portland, OR 97202",
      coordinates: {
        latitude: 45.5051,
        longitude: -122.6528
      },
      googleMapsUrl: "https://www.google.com/maps?cid=2882847891293830454",
      googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5592.498093295984!2d-122.652856!3d45.505065!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54950b992a10ec77%3A0x27e481ed74713d36!2sBody%20Expressions%20of%20Portland%20-%20Eating%20Disorders%20Counseling!5e0!3m2!1sen!2sus!4v1763163338622!5m2!1sen!2sus"
    },
    vancouver: {
      name: "Vancouver Office",
      street: "400 E. Evergreen Blvd, Suite 309",
      city: "Vancouver",
      state: "WA",
      stateFullName: "Washington",
      zip: "98660",
      country: "United States",
      countryCode: "US",
      fullAddress: "400 E. Evergreen Blvd, Suite 309, Vancouver, WA 98660",
      coordinates: {
        latitude: 45.6280,
        longitude: -122.6739
      },
      googleMapsUrl: "https://www.google.com/maps/place/Vancouver,+WA",
      telehealth: true
    }
  },
  
  hours: {
    monday: "9:00 AM – 6:00 PM",
    tuesday: "9:00 AM – 6:00 PM",
    wednesday: "9:00 AM – 6:00 PM",
    thursday: "9:00 AM – 6:00 PM",
    friday: "9:00 AM – 6:00 PM",
    saturday: "By appointment",
    sunday: "Closed"
  },
  
  hoursShort: {
    weekdays: "Monday – Friday: 9am – 6pm",
    saturday: "Saturday: By appointment",
    sunday: "Sunday: Closed"
  },
  
  socialMedia: {
    facebook: "https://www.facebook.com/beyondeatingrecovery",
    instagram: "https://www.instagram.com/beyondeatingrecovery",
    linkedin: "https://www.linkedin.com/company/beyond-eating-recovery",
    youtube: "https://www.youtube.com/@beyondeatingrecovery"
  },
  
  services: [
    "Eating Disorder Treatment",
    "Individual Therapy",
    "Group Therapy",
    "Nutrition Counseling",
    "Telehealth Services",
    "HAES® Approach",
    "Intuitive Eating"
  ],
  
  serviceAreas: [
    "Portland, OR",
    "Vancouver, WA",
    "Oregon (telehealth)",
    "Washington (telehealth)"
  ]
} as const;

// Reusable NAP Components
interface NAPBusinessNameProps {
  className?: string;
  variant?: "default" | "full";
}

export const NAPBusinessName = ({ className = "", variant = "default" }: NAPBusinessNameProps) => (
  <span className={className}>
    {variant === "full" ? NAP_DATA.businessNameFull : NAP_DATA.businessName}
  </span>
);

interface NAPPhoneProps {
  className?: string;
  showIcon?: boolean;
  asLink?: boolean;
}

export const NAPPhone = ({ className = "", showIcon = false, asLink = true }: NAPPhoneProps) => {
  const content = (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      {showIcon && <Phone className="w-4 h-4" />}
      {NAP_DATA.phone}
    </span>
  );
  
  return asLink ? (
    <a href={`tel:${NAP_DATA.phoneRaw}`} className={className}>
      {content}
    </a>
  ) : content;
};

interface NAPAddressProps {
  location?: "portland" | "vancouver";
  className?: string;
  showIcon?: boolean;
  format?: "full" | "short";
}

export const NAPAddress = ({ 
  location = "portland", 
  className = "", 
  showIcon = false,
  format = "full"
}: NAPAddressProps) => {
  const loc = NAP_DATA.locations[location];
  
  return (
    <address className={`not-italic inline-flex items-start gap-2 ${className}`}>
      {showIcon && <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />}
      {format === "full" ? (
        <span>
          {loc.street}<br />
          {loc.city}, {loc.state} {loc.zip}
        </span>
      ) : (
        <span>{loc.city}, {loc.state}</span>
      )}
    </address>
  );
};

interface NAPEmailProps {
  className?: string;
  showIcon?: boolean;
}

export const NAPEmail = ({ className = "", showIcon = false }: NAPEmailProps) => (
  <a href={`mailto:${NAP_DATA.email}`} className={`inline-flex items-center gap-2 ${className}`}>
    {showIcon && <Mail className="w-4 h-4" />}
    {NAP_DATA.email}
  </a>
);

interface NAPHoursProps {
  className?: string;
  showIcon?: boolean;
  format?: "full" | "short";
}

export const NAPHours = ({ className = "", showIcon = false, format = "short" }: NAPHoursProps) => (
  <div className={`${className}`}>
    {showIcon && (
      <div className="flex items-center gap-2 mb-2">
        <Clock className="w-4 h-4" />
        <span className="font-semibold">Office Hours</span>
      </div>
    )}
    {format === "short" ? (
      <div className="space-y-1">
        <p>{NAP_DATA.hoursShort.weekdays}</p>
        <p>{NAP_DATA.hoursShort.saturday}</p>
        <p>{NAP_DATA.hoursShort.sunday}</p>
      </div>
    ) : (
      <div className="space-y-1">
        {Object.entries(NAP_DATA.hours).map(([day, hours]) => (
          <p key={day} className="flex justify-between">
            <span className="capitalize">{day}:</span>
            <span>{hours}</span>
          </p>
        ))}
      </div>
    )}
  </div>
);

// Full NAP Block for sidebar/footer usage
interface NAPBlockProps {
  className?: string;
  showHours?: boolean;
  location?: "portland" | "vancouver" | "both";
}

export const NAPBlock = ({ className = "", showHours = true, location = "portland" }: NAPBlockProps) => (
  <div className={`space-y-4 ${className}`}>
    <h3 className="font-semibold text-lg">{NAP_DATA.businessName}</h3>
    
    {(location === "portland" || location === "both") && (
      <NAPAddress location="portland" showIcon format="full" />
    )}
    
    {(location === "vancouver" || location === "both") && (
      <div className="mt-2">
        <NAPAddress location="vancouver" showIcon format="full" />
        {NAP_DATA.locations.vancouver.telehealth && (
          <p className="text-sm text-muted-foreground ml-6">(Telehealth services)</p>
        )}
      </div>
    )}
    
    <NAPPhone showIcon asLink />
    <NAPEmail showIcon />
    
    {showHours && <NAPHours showIcon format="short" />}
  </div>
);

// Schema.org LocalBusiness structured data generator
export const generateLocalBusinessSchema = (location: "portland" | "vancouver") => {
  const loc = NAP_DATA.locations[location];
  
  return {
    "@type": "LocalBusiness",
    "@id": `${NAP_DATA.website}/#localbusiness-${location}`,
    "name": `${NAP_DATA.businessName} - ${loc.city}`,
    "description": `Eating disorder treatment center in ${loc.city}, ${loc.stateFullName} offering compassionate therapy for anorexia, bulimia, binge eating disorder, and body image concerns.`,
    "url": NAP_DATA.website,
    "telephone": NAP_DATA.phoneInternational,
    "email": NAP_DATA.email,
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": loc.street,
      "addressLocality": loc.city,
      "addressRegion": loc.state,
      "postalCode": loc.zip,
      "addressCountry": loc.countryCode
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": loc.coordinates.latitude.toString(),
      "longitude": loc.coordinates.longitude.toString()
    },
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": loc.coordinates.latitude.toString(),
        "longitude": loc.coordinates.longitude.toString()
      },
      "geoRadius": "40000"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "14:00"
      }
    ],
    "sameAs": Object.values(NAP_DATA.socialMedia)
  };
};

export default NAPBlock;
