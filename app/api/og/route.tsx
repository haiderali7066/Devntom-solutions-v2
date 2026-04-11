// app/api/og/route.tsx
// Dynamic Open Graph image generator using Next.js ImageResponse
//
// Generates a 1200×630 branded image for any page on the fly.
// Use in generateMetadata() like this:
//
//   openGraph: {
//     images: [`https://devntomsolutions.com/api/og?title=Web+Development&tag=Services`],
//   }
//
// Query params:
//   title    — main headline  (required)
//   subtitle — smaller text   (optional, default: "Where Systems Become Strategy")
//   tag      — pill label     (optional, default: "devntomsolutions.com")

import { ImageResponse } from "next/og";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const title    = searchParams.get("title")    || "DEVNTOM Solutions";
  const subtitle = searchParams.get("subtitle") || "Where Systems Become Strategy";
  const tag      = searchParams.get("tag")      || "devntomsolutions.com";

  return new ImageResponse(
    (
      <div
        style={{
          width:          "100%",
          height:         "100%",
          display:        "flex",
          flexDirection:  "column",
          alignItems:     "flex-start",
          justifyContent: "space-between",
          padding:        "60px 72px",
          background:     "linear-gradient(135deg, #080810 0%, #0d0d1a 60%, #0a0a14 100%)",
          fontFamily:     "sans-serif",
          position:       "relative",
          overflow:       "hidden",
        }}
      >
        {/* ── Grid overlay ── */}
        <div
          style={{
            position:        "absolute",
            inset:           0,
            backgroundImage: "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
            backgroundSize:  "64px 64px",
          }}
        />

        {/* ── Violet glow top-right ── */}
        <div
          style={{
            position:     "absolute",
            top:          "-120px",
            right:        "-120px",
            width:        "550px",
            height:       "550px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(124,58,237,0.35) 0%, transparent 70%)",
          }}
        />

        {/* ── Sky glow bottom-left ── */}
        <div
          style={{
            position:     "absolute",
            bottom:       "-80px",
            left:         "100px",
            width:        "450px",
            height:       "450px",
            borderRadius: "50%",
            background:   "radial-gradient(circle, rgba(14,165,233,0.22) 0%, transparent 70%)",
          }}
        />

        {/* ── Logo row ── */}
        <div
          style={{
            display:    "flex",
            alignItems: "center",
            gap:        "14px",
            position:   "relative",
            zIndex:     10,
          }}
        >
          {/* Logo mark */}
          <div
            style={{
              width:        "44px",
              height:       "44px",
              borderRadius: "12px",
              background:   "linear-gradient(135deg, #0ea5e9, #7c3aed)",
              display:      "flex",
              alignItems:   "center",
              justifyContent: "center",
              boxShadow:    "0 4px 20px rgba(14,165,233,0.45)",
            }}
          >
            <span style={{ color: "white", fontSize: "20px", fontWeight: 900 }}>D</span>
          </div>

          {/* Wordmark */}
          <span style={{ color: "white", fontSize: "20px", fontWeight: 900, letterSpacing: "-0.02em" }}>
            DEVNTOM
            <span style={{ color: "#38bdf8" }}>.</span>
          </span>
        </div>

        {/* ── Main content ── */}
        <div
          style={{
            display:       "flex",
            flexDirection: "column",
            gap:           "20px",
            position:      "relative",
            zIndex:        10,
            maxWidth:      "860px",
          }}
        >
          {/* Tag pill */}
          <div
            style={{
              padding:      "6px 18px",
              borderRadius: "100px",
              border:       "1px solid rgba(14,165,233,0.35)",
              background:   "rgba(14,165,233,0.12)",
              color:        "#7dd3fc",
              fontSize:     "15px",
              fontWeight:   700,
              width:        "fit-content",
            }}
          >
            {tag}
          </div>

          {/* Title */}
          <div
            style={{
              color:       "white",
              fontSize:    title.length > 40 ? "52px" : "62px",
              fontWeight:  900,
              lineHeight:  1.05,
              letterSpacing: "-0.03em",
            }}
          >
            {title}
          </div>

          {/* Subtitle */}
          <div
            style={{
              color:      "rgba(255,255,255,0.45)",
              fontSize:   "22px",
              fontWeight: 500,
              lineHeight: 1.4,
            }}
          >
            {subtitle}
          </div>
        </div>

        {/* ── Bottom bar ── */}
        <div
          style={{
            display:        "flex",
            alignItems:     "center",
            justifyContent: "space-between",
            width:          "100%",
            position:       "relative",
            zIndex:         10,
          }}
        >
          <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "14px", fontWeight: 600 }}>
            devntomsolutions@gmail.com  ·  +92 325 6036838
          </span>
          <span style={{ color: "rgba(255,255,255,0.15)", fontSize: "14px", fontWeight: 600 }}>
            devntomsolutions.com
          </span>
        </div>
      </div>
    ),
    {
      width:  1200,
      height: 630,
    }
  );
}