import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Message from the developer',
  description:
    'On how much of Quanta was written by hand, how much by AI, and how it is checked.',
};

/**
 * The author's own text, verbatim.
 *
 * Kept in plain strings rather than JSX so that nothing — punctuation,
 * spacing, capitalisation, the `--` asides — gets quietly normalised by an
 * editor or by JSX entity escaping. Two words were changed at the author's
 * request ("jit" to "kid", "trust" to "honest"); everything else is exactly as
 * written. Do not copy-edit this page.
 */
const paragraphs = [
  `hello everyone, i wanted to write this letter to who curios about how did we developed solar -- and i want to be transparent as possible --. i don't like sharing my age and marketing something with it, but to understand the story more i think i need to share it, please don't think this as a some marketing thing.`,

  `first of all, i am 16 and building a browser was my dream since i was 12, i am not stranger to programming, i made multiple apps with c# .net and one of those was kinda browser that using webview2, ever since i was a kid i have tested multiple browsers and every browser had it's own trade-off. i wanted to do something that solves most of the problems. back then i had no idea how can i do that, just dreams.`,

  `after my highschool entry exam, the same idea came to my mind, building a web browser, still have no idea, just dreams & how will it be -- no where close to what it is today --. again, i made prototype of what it will look like in python using qtwebview but it hadn't been enough, i really wanted to build a web browser, but there was one problem, i wasn't that deep in programming & i didn't like being on computer all day, ai came in clutch atp i think.`,

  `and if we are talking about some artificial intelligence we need to draw the borders carefully. what did ata do on solar & what did ai? i designed the architecture, not fully myself -- atleast on quanta (ecmascript engine) -- i searched for other engines architectures, looked for why did they do this way, what did they regress doing these so on. when i really want to use that architecture on quanta -- it has to be suitable for solar's architecture -- i look for any contradiction for my past decisions and for solar, when it all seems okay on my side, i ask to the ai for like what do you think about this, is there any think that i missed, then it answers bla bla bla bla bla bla, when i see something that might be wrong on his perspective, i go for it, ask more about it, then it says yeah you are right idk it goes like that, but when it comes to writing the code, i am not gonna lie, at 16, i can't make a ecmascript (js) engine from scratch that passes %80 on overall test262 and ~%98.6 on only language and built-ins suite that has register-based vm and non-moving gc in roughly 6 months, to do this you need to have lot of experience like 15 years or so i think. do we have examples, yeah, at top, everyone knows him, fabrice bellard and his friend, i don't know the exact time they worked on quickjs, but they are different than a software engineer, fabrice bellard has lot of experience. for example he created ffmpeg and everyone uses it without knowing it. he's the goat.`,

  `if we continue on ai writing the code, first inspirations are not good in it, you can think it is buggy, glitchy, not completed, probably crashes everytime but rather then just accepting the code that ai writes, i check it, i test it with core ecmascript suite test262 then gc_stress flags for crashes and also compare it with other engines for the sides that test262 not tests, i also started running real world applications to test the limits on real world.`,

  `also i think, without knowing the internal things of engine that you are making with ai, is not that sustainable, if i speak with my experience, ai hits the wall and if you don't know what's going on inside the engine, not knowing architecture, you don't know what to do and maybe you just abandone the project at that point it wasn't on that way with quanta, i always directed ai when it hit walls, it can't remember what did we do 6 weeks ago about that side of engine it's working on, but i do.`,

  `and and and, if we talking about why i wanted to write this text & why adding ai as a team member, co-auth on commits etc..`,

  `it feels wrong. marketing something that you didn't fully do as you fully did, like you are a superhero or something feels wrong, it is not right to me even if i wanted to hide it, how long was it going to continue? somebody with industry knowledge will come and just roast you right? i think being honest is better then larping.`,
];

const BLOG_URL = 'https://quanta.js.org/blog.html';

/**
 * Deliberately bare: no navigation, no footer, no page header. It opens in its
 * own tab and is meant to read as a letter rather than as another section of
 * the site.
 */
export default function LetterPage() {
  return (
    <main className="mx-auto min-h-[100svh] max-w-[38rem] px-6 py-20 md:py-32">
      <p className="label mb-16 md:mb-24">Message from the developer</p>

      <div
        className="
          text-fg
          [&_p]:mb-6 [&_p]:text-[1.0625rem] [&_p]:leading-[1.7] md:[&_p]:text-lg
          [&_p:last-of-type]:mb-0
          [&_a]:underline [&_a]:decoration-line-strong [&_a]:underline-offset-4 hover:[&_a]:decoration-accent
        "
      >
        {paragraphs.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}

        <p>
          {'i will explain all the architectural decisions that i took on " '}
          <a href={BLOG_URL} target="_blank" rel="noreferrer">
            {BLOG_URL}
          </a>
          {' ", and more about ai usage on project, thanks for reading this text thanks for spending time and thanks for being curious about solar.'}
        </p>
      </div>

      <div className="mt-16 md:mt-20">
        <a
          href="https://github.com/ataturkcu"
          target="_blank"
          rel="noreferrer"
          className="group font-mono text-[0.6875rem] uppercase tracking-[0.14em] transition-colors duration-200 hover:text-accent"
        >
          — Ata Türkçü
          <span
            aria-hidden
            className="ml-2 inline-block text-fg-3 transition-transform duration-200 group-hover:translate-x-1"
          >
            ↗
          </span>
        </a>
        <p className="label mt-1.5">Lead, Solar</p>
      </div>

      {/*
        The page opens in its own tab, so this is not a back button — it is for
        anyone who arrives at this URL directly and has nowhere to go from here.
        Set well below the signature so the letter still ends at the signature.
      */}
      <Link
        href="/"
        className="group mt-24 inline-flex items-center gap-2 font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-fg-3 transition-colors duration-200 hover:text-accent md:mt-32"
      >
        <span
          aria-hidden
          className="inline-block transition-transform duration-200 group-hover:-translate-x-1"
        >
          ←
        </span>
        Go back to Solar
      </Link>
    </main>
  );
}
