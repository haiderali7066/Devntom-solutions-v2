export default function SchemaMarkup() {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'DEVNTOM Solutions',
    url: 'https://devntom.com',
    logo: 'https://devntom.com/logo.png',
    description: 'Digital transformation and technology solutions provider',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+92-325-6036838',
      contactType: 'Sales',
      email: 'devntomsolutions@gmail.com',
      areaServed: 'PK',
      availableLanguage: ['en'],
    },
    sameAs: [
      'https://instagram.com/Devntom.solutions',
      'https://facebook.com',
      'https://linkedin.com',
      'https://twitter.com',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
      addressRegion: 'Pakistan',
    },
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'DEVNTOM Solutions',
    image: 'https://devntom.com/logo.png',
    description: 'Professional web development, digital marketing, software development, and AI automation services',
    telephone: '+92-325-6036838',
    email: 'devntomsolutions@gmail.com',
    url: 'https://devntom.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PK',
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
    </>
  );
}
