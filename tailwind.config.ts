import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic tokens — everything new should use these.
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        surface: "var(--surface)",
        fg: {
          DEFAULT: "rgb(var(--fg-rgb) / <alpha-value>)",
          2: "var(--fg-2)",
          3: "var(--fg-3)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },
        accent: "var(--accent)",

        // Kept so the not-yet-migrated sub-pages keep rendering.
        background: "var(--bg)",
        foreground: "var(--fg)",
        dark: "#0e0d0e",
        light: "#f2f0ee",
      },
      borderColor: {
        DEFAULT: "var(--line)",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      fontSize: {
        // Fluid display scale — no breakpoint jumps.
        "display-sm": ["clamp(2.5rem, 7vw, 4.5rem)", { lineHeight: "0.9" }],
        "display-md": ["clamp(3.5rem, 11vw, 8rem)", { lineHeight: "0.85" }],
        "display-lg": ["clamp(4rem, 15.5vw, 15rem)", { lineHeight: "0.82" }],
      },
      maxWidth: {
        shell: "96rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
} satisfies Config;
