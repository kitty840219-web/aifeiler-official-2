import Image from "next/image";
import Link from "next/link";
import { LINKS, SITE } from "@/lib/data/site";
import { asset } from "@/lib/basePath";

const SOCIAL_LINKS = [
  { label: "IG", href: LINKS.instagramQuotes, tone: "border-[#d6a09c] text-[#f4d2cd]" },
  { label: "LINE", href: LINKS.lineOA, tone: "border-[#a9cdb5] text-[#d7f0de]" },
  { label: "YT", href: LINKS.youtube, tone: "border-[#d7a8a2] text-[#f5d7d2]" },
];

export default function HomePage() {
  return (
    <main className="relative isolate min-h-[100svh] overflow-hidden bg-[#161534] text-white">
      <Image src={asset("/images/entry-gate-background.webp")} alt="小艾在星空中傳遞溫柔訊息" fill priority sizes="100vw" className="-z-20 object-cover object-center" />
      <div className="absolute inset-0 -z-10 bg-[#12102f]/20" aria-hidden />

      <section className="absolute inset-y-0 left-1/2 flex w-[min(82vw,25rem)] -translate-x-1/2 flex-col items-center justify-center border-x border-white/20 bg-[#1c193b]/45 px-6 text-center shadow-[0_0_50px_rgba(10,8,27,0.22)] backdrop-blur-[2px] sm:w-[22rem] sm:px-8">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0f0d28]/45 to-transparent" aria-hidden />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0f0d28]/55 to-transparent" aria-hidden />
        <div className="relative flex w-full flex-col items-center">
          <span className="mb-4 text-xs font-semibold tracking-[0.42em] text-[#f3cf8c]">AIFEILER</span>
          <h1 className="font-serif text-[2.65rem] font-black tracking-[0.16em] text-[#fff8eb] drop-shadow-[0_3px_12px_rgba(15,11,39,0.7)] sm:text-5xl">艾飛樂</h1>
          <p className="mt-4 text-sm font-medium tracking-[0.22em] text-white/85">數位文創個人工作室</p>
          <div className="my-7 h-px w-12 bg-[#efcc8b]" />
          <p className="font-serif text-lg font-semibold leading-loose text-[#fff9ee] drop-shadow-[0_2px_10px_rgba(15,11,39,0.72)]">{SITE.tagline}<br />{SITE.taglineSub}</p>
          <Link href="/about" className="mt-9 inline-flex min-w-52 items-center justify-center rounded-full border border-white/20 bg-[#51465a]/90 px-7 py-4 text-sm font-bold tracking-[0.18em] text-white shadow-[0_8px_20px_rgba(9,7,26,0.35)] transition hover:-translate-y-0.5 hover:bg-[#66566a]">瞭解更多</Link>
          <nav aria-label="艾飛樂社群連結" className="mt-7 flex items-center justify-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={`前往艾飛樂 ${social.label}`} className={`grid h-12 w-12 place-items-center rounded-full border bg-[#231e45]/65 text-[11px] font-black tracking-tight shadow-[0_4px_12px_rgba(10,8,27,0.28)] transition hover:-translate-y-1 hover:bg-white/20 ${social.tone}`}>{social.label}</a>
            ))}
          </nav>
        </div>
        <p className="absolute bottom-8 text-[10px] tracking-[0.18em] text-white/55">ILLUSTRATION · STORIES · WARMTH</p>
      </section>
    </main>
  );
}
