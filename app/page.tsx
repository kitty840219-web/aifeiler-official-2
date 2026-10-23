import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/data/site";
import { LINKS } from "@/lib/data/site";
import { asset } from "@/lib/basePath";

export default function HomePage() {
  return (
    <main className="relative isolate flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#493d60] px-5 py-9 text-[#45362e] sm:px-8">
      <Image
        src={asset("/images/hero-cover.webp")}
        alt=""
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[#34263c]/[0.16]" aria-hidden />

      <section className="relative w-full max-w-[29rem] overflow-hidden rounded-[2rem] border border-white/55 bg-[#fffaf3]/[0.76] px-6 py-10 text-center shadow-[0_24px_80px_rgba(63,43,58,0.32)] backdrop-blur-md sm:px-10 sm:py-12">
        <span className="absolute left-5 top-5 h-2.5 w-2.5 rounded-full bg-[#efac9c]" aria-hidden />
        <span className="absolute left-9 top-5 h-2.5 w-2.5 rounded-full bg-[#f4c863]" aria-hidden />
        <span className="absolute left-[3.25rem] top-5 h-2.5 w-2.5 rounded-full bg-[#9fcfc2]" aria-hidden />

        <p className="mt-3 font-sans text-[11px] font-bold tracking-[0.34em] text-[#8a6d83]">
          {SITE.brandEn.toUpperCase()} CREATIVE STUDIO
        </p>
        <h1 className="mt-4 font-serif text-4xl font-black tracking-[0.08em] text-[#4a382e] sm:text-5xl">
          {SITE.brand}
        </h1>
        <div className="mx-auto mt-5 h-px w-20 bg-[#d9a39b]" />
        <p className="mt-5 font-serif text-lg font-semibold leading-relaxed text-[#6d5856]">
          {SITE.tagline}
          <br />
          {SITE.taglineSub}
        </p>
        <p className="mx-auto mt-5 max-w-sm text-sm leading-7 text-[#705f5b]">
          用插畫、文字與溫柔的品牌視覺，
          <br />
          把每一個值得被記住的心意留下來。
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          <Link
            href="/portfolio"
            className="rounded-full bg-[#745765] px-5 py-3.5 text-sm font-bold tracking-[0.14em] text-white shadow-[0_8px_18px_rgba(103,70,85,0.24)] transition hover:-translate-y-0.5 hover:bg-[#604652]"
          >
            瀏覽創作作品
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-[#b8847a] bg-white/65 px-5 py-3.5 text-sm font-bold tracking-[0.14em] text-[#76564d] transition hover:-translate-y-0.5 hover:bg-white"
          >
            洽談合作
          </Link>
        </div>

        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href={LINKS.instagramQuotes}
            target="_blank"
            rel="noreferrer"
            aria-label="前往艾飛樂 Instagram"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#d5a59a] bg-white/70 text-lg font-bold text-[#855b64] transition hover:-translate-y-0.5 hover:bg-[#ffe8e1]"
          >
            IG
          </a>
          <a
            href={LINKS.lineOA}
            target="_blank"
            rel="noreferrer"
            aria-label="加入艾飛樂官方 LINE"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#91b39d] bg-white/70 text-[11px] font-black text-[#557b63] transition hover:-translate-y-0.5 hover:bg-[#e6f4e9]"
          >
            LINE
          </a>
          <a
            href={LINKS.youtube}
            target="_blank"
            rel="noreferrer"
            aria-label="前往艾飛樂 YouTube"
            className="grid h-11 w-11 place-items-center rounded-full border border-[#d6a08e] bg-white/70 text-[11px] font-black text-[#9a5547] transition hover:-translate-y-0.5 hover:bg-[#fff0eb]"
          >
            PLAY
          </a>
        </div>

        <div className="mt-8 border-t border-[#d7b8af]/70 pt-5 text-xs tracking-[0.18em] text-[#987b72]">
          ILLUSTRATION · VISUAL DESIGN · CUSTOM GIFTS
        </div>
      </section>
    </main>
  );
}
