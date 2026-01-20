import { Helmet } from "react-helmet";

interface BookSchemaProps {
  name: string;
  authorName: string;
  description: string;
  isbn?: string;
  numberOfPages?: string;
  datePublished?: string;
  publisher?: string;
  imageUrl?: string;
  url?: string;
}

const BookSchema = ({
  name,
  authorName,
  description,
  isbn,
  numberOfPages,
  datePublished = "2023-02-01",
  publisher = "Amazon Kindle Direct Publishing",
  imageUrl,
  url
}: BookSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Book",
    "name": name,
    "author": {
      "@type": "Person",
      "name": authorName,
      "jobTitle": "Licensed Professional Counselor",
      "url": "https://www.beyondeatingrecovery.com/about/anne-cuthbert"
    },
    "description": description,
    "publisher": {
      "@type": "Organization",
      "name": publisher
    },
    "datePublished": datePublished,
    "inLanguage": "en-US",
    "genre": ["Self-Help", "Mental Health", "Eating Disorders", "Psychology"],
    "about": [
      {
        "@type": "Thing",
        "name": "Eating Disorders"
      },
      {
        "@type": "Thing",
        "name": "Emotional Eating"
      },
      {
        "@type": "Thing",
        "name": "Body Image"
      }
    ],
    ...(isbn && { "isbn": isbn }),
    ...(numberOfPages && { "numberOfPages": numberOfPages }),
    ...(imageUrl && { "image": imageUrl }),
    ...(url && { "url": url })
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default BookSchema;
