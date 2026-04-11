"use client";

import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface Crumb {
  label: string;
  href?: string;
}

export default function BreadcrumbNav({ crumbs }: { crumbs: Crumb[] }) {
  const baseUrl = "https://devntom.com";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: baseUrl,
      },
      ...crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.label,
        ...(c.href && { item: `${baseUrl}${c.href}` }),
      })),
    ],
  };

  return (
    <>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* UI */}
      <nav className="flex items-center gap-1.5 text-sm text-white/40 flex-wrap">
        <Link href="/" className="flex items-center gap-1 hover:text-white">
          <Home size={12} /> Home
        </Link>

        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight size={12} className="text-white/20" />

            {crumb.href ? (
              <Link href={crumb.href} className="hover:text-white">
                {crumb.label}
              </Link>
            ) : (
              <span className="text-white/70">{crumb.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}