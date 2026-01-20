import { Helmet } from "react-helmet";

interface CourseSchemaProps {
  name: string;
  description: string;
  providerName: string;
  providerUrl: string;
  instructorName: string;
  instructorUrl?: string;
  courseUrl: string;
  price?: string;
  priceCurrency?: string;
  duration?: string;
  courseMode?: "Online" | "Onsite" | "Blended";
}

const CourseSchema = ({
  name,
  description,
  providerName,
  providerUrl,
  instructorName,
  instructorUrl,
  courseUrl,
  price,
  priceCurrency = "USD",
  duration = "P4W", // 4 weeks in ISO 8601 duration format
  courseMode = "Online"
}: CourseSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "url": courseUrl,
    "provider": {
      "@type": "Organization",
      "name": providerName,
      "url": providerUrl
    },
    "creator": {
      "@type": "Person",
      "name": instructorName,
      ...(instructorUrl && { "url": instructorUrl })
    },
    "hasCourseInstance": {
      "@type": "CourseInstance",
      "courseMode": courseMode,
      "courseWorkload": duration,
      "inLanguage": "en-US"
    },
    "educationalLevel": "Beginner",
    "teaches": [
      "Understanding binge eating triggers",
      "Breaking the restrict-binge cycle",
      "Emotional regulation strategies",
      "Intuitive eating principles",
      "Building a healthy relationship with food"
    ],
    "about": [
      {
        "@type": "Thing",
        "name": "Binge Eating Disorder"
      },
      {
        "@type": "Thing",
        "name": "Emotional Eating"
      }
    ],
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": priceCurrency,
        "availability": "https://schema.org/InStock",
        "url": courseUrl
      }
    })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default CourseSchema;
