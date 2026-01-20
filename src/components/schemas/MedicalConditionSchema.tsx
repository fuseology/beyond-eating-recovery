import { Helmet } from "react-helmet";

interface MedicalConditionSchemaProps {
  name: string;
  alternateName?: string[];
  description: string;
  signOrSymptom?: string[];
  possibleTreatment?: string[];
  riskFactor?: string[];
  url: string;
  medicalSpecialty?: string;
}

const MedicalConditionSchema = ({
  name,
  alternateName,
  description,
  signOrSymptom,
  possibleTreatment,
  riskFactor,
  url,
  medicalSpecialty = "Psychiatry"
}: MedicalConditionSchemaProps) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalCondition",
    "name": name,
    ...(alternateName && alternateName.length > 0 && { "alternateName": alternateName }),
    "description": description,
    "url": url,
    "relevantSpecialty": {
      "@type": "MedicalSpecialty",
      "name": medicalSpecialty
    },
    ...(signOrSymptom && signOrSymptom.length > 0 && {
      "signOrSymptom": signOrSymptom.map(symptom => ({
        "@type": "MedicalSignOrSymptom",
        "name": symptom
      }))
    }),
    ...(possibleTreatment && possibleTreatment.length > 0 && {
      "possibleTreatment": possibleTreatment.map(treatment => ({
        "@type": "MedicalTherapy",
        "name": treatment
      }))
    }),
    ...(riskFactor && riskFactor.length > 0 && {
      "riskFactor": riskFactor.map(factor => ({
        "@type": "MedicalRiskFactor",
        "name": factor
      }))
    }),
    "medicineSystem": {
      "@type": "MedicineSystem",
      "name": "Western Medicine"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default MedicalConditionSchema;
