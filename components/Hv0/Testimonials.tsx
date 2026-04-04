"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const reviews = [
  { name: "Ahmed Raza", handle: "@ahmedr", avatar: "https://i.pravatar.cc/48?img=11", quote: "Devntom built our entire e-commerce platform from scratch in under 6 weeks. Sales jumped 60% within the first month. Absolutely stellar team." },
  { name: "Sara Malik", handle: "@saradesigns", avatar: "https://i.pravatar.cc/48?img=5", quote: "The UI/UX work they did for our app was exceptional. Our users love the new interface and our retention improved significantly." },
  { name: "Usman Tariq", handle: "@usmant", avatar: "https://i.pravatar.cc/48?img=8", quote: "Their AI chatbot cut our support costs by 35%. It handles over 70% of customer queries automatically. Best investment we made." },
  { name: "Hira Noor", handle: "@hiranoor", avatar: "https://i.pravatar.cc/48?img=47", quote: "We needed a custom CRM and they delivered something beyond our expectations. The team is professional, responsive, and genuinely cares." },
  { name: "Bilal Khan", handle: "@bilalk", avatar: "https://i.pravatar.cc/48?img=15", quote: "Their SEO and digital marketing team tripled our organic traffic in 4 months. Results speak for themselves — highly recommended." },
  { name: "Fatima Sheikh", handle: "@fatimas", avatar: "https://i.pravatar.cc/48?img=20", quote: "The mobile app they built for us is beautiful, fast, and crash-free. They even handled App Store submission. Truly end-to-end." },
];

const col1 = [...reviews, ...reviews];
const col2 = [...reviews.slice(2), ...reviews.slice(0, 2), ...reviews.slice(2), ...reviews.slice(0, 2)];
const col3 = [...reviews.slice(4), ...reviews.slice(0, 4), ...reviews.slice(4), ...reviews.slice(0, 4)];

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div className="w-[210px] bg-white rounded-2xl p-4 shadow-sm flex flex-col gap-3 mb-3 flex-shrink-0 border border-gray-100">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="#1DA1F2">
        <path d="M22.46 5.924c-.793.352-1.645.59-2.54.698a4.44 4.44 0 001.946-2.45 8.87 8.87 0 01-2.812 1.075 4.43 4.43 0 00-7.547 4.04A12.573 12.573 0 013.09 4.81a4.43 4.43 0 001.371 5.912 4.41 4.41 0 01-2.005-.553v.055a4.43 4.43 0 003.553 4.342 4.45 4.45 0 01-2 .076 4.432 4.432 0 004.136 3.074A8.884 8.884 0 012 19.54a12.52 12.52 0 006.79 1.99c8.148 0 12.608-6.75 12.608-12.608 0-.192-.004-.384-.013-.574A9.003 9.003 0 0024 5.344a8.835 8.835 0 01-2.54.58z" />
      </svg>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0 border border-gray-100">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={review.avatar} alt={review.name} className="w-full h-full object-cover" />
        </div>
        <div>
          <p className="text-[11px] font-bold text-gray-900 leading-tight">{review.name}</p>
          <p className="text-[10px] text-gray-400">{review.handle}</p>
        </div>
      </div>
      <p className="text-[0.68rem] text-gray-500 leading-relaxed">&ldquo;{review.quote}&rdquo;</p>
    </div>
  );
}

function ScrollColumn({ items, direction = "up", speed = 40 }: { items: typeof reviews; direction?: "up" | "down"; speed?: number }) {
  return (
    <div className="overflow-hidden h-full">
      <motion.div
        className="flex flex-col"
        animate={{ y: [direction === "up" ? "0%" : "-50%", direction === "up" ? "-50%" : "0%"] }}
        transition={{ repeat: Infinity, repeatType: "loop", duration: speed, ease: "linear" }}
      >
        {items.map((r, i) => <ReviewCard key={i} review={r} />)}
      </motion.div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#0d0d12] w-full overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 py-20 flex flex-col lg:flex-row gap-16 items-center">

        {/* LEFT */}
        <div className="lg:w-[42%] flex-shrink-0 flex flex-col gap-7">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex w-fit items-center gap-2 rounded-full bg-violet-600 px-4 py-1.5 text-xs font-bold text-white"
          >
            50+ Happy Clients
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[clamp(2.6rem,5vw,4rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Hear From<br />
            Those We&apos;ve<br />
            Helped Grow
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-sm text-white/40 leading-relaxed max-w-[280px]"
          >
            Real results from real businesses. Our clients share what it&apos;s like to work with Devntom Solutions.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="self-start w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
          >
            <ArrowRight size={16} />
          </motion.button>
        </div>

        {/* RIGHT */}
        <div className="flex-1 relative">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0d0d12] to-transparent z-10" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0d0d12] to-transparent z-10" />
          <div className="flex gap-3 h-[520px] overflow-hidden">
            <ScrollColumn items={col1} direction="up" speed={34} />
            <ScrollColumn items={col2} direction="down" speed={40} />
            <ScrollColumn items={col3} direction="up" speed={28} />
          </div>
        </div>
      </div>
    </section>
  );
}
