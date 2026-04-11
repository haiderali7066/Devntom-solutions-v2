interface StructuredDataProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function StructuredData({ schema }: StructuredDataProps) {
  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      suppressHydrationWarning
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}