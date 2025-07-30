'use client';

interface StructuredDataProps {
  schema: object | object[];
}

export const StructuredData = ({ schema }: StructuredDataProps) => {
  const schemaArray = Array.isArray(schema) ? schema : [schema];

  return (
    <>
      {schemaArray.map((schemaItem, index) => (
        <script
          key={index}
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaItem),
          }}
        />
      ))}
    </>
  );
};
