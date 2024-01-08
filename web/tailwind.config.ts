import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ['var(--font-apercu)'],
      },
      backgroundImage: {
        truck: "url('/assets/hero-bg.jpg')",
      },
      colors: {
        greenLime: '#C2FF1A',
        veryDarkBlue: '#0D1118',
      },
    },
  },
  plugins: [],
}
export default config
