import { Helmet } from "react-helmet";

interface AggregateRatingSchemaProps {
  ratingValue: string;
  reviewCount: string;
  bestRating?: string;
  worstRating?: string;
}

/**
 * Reusable AggregateRating schema component for adding star rating data
 * that can be embedded within LocalBusiness or MedicalBusiness structured data.
 * 
 * Note: This returns the schema object to be merged with parent schema,
 * not a standalone Helmet component.
 */
export const getAggregateRatingSchema = ({
  ratingValue,
  reviewCount,
  bestRating = "5",
  worstRating = "1"
}: AggregateRatingSchemaProps) => ({
  "@type": "AggregateRating",
  "ratingValue": ratingValue,
  "reviewCount": reviewCount,
  "bestRating": bestRating,
  "worstRating": worstRating
});

/**
 * Default rating data for Beyond Eating Recovery
 * Update these values based on actual Google Business Profile reviews
 */
export const BUSINESS_RATING = {
  ratingValue: "4.9",
  reviewCount: "47"
};

export default getAggregateRatingSchema;
