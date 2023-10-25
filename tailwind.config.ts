import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#d0bea3',
          '200': '#d34f5e',
          '300': '#b83a49',
          '400': '#e63946',
          '500': '#498ebc',
          '600': '#395182',
          '700': '#214e82',
          '800': '#262e52',
          '900': '#c2bec6',
          '1000': '#a5a4a9',
          '1100': '#2c2b3f',
          '1200': '#181320',
          '1300': '#3b3230'
        }
      },
      spacing: {
        quadrado: '10rem'
      }
    },
  },
  plugins: [],
}
export default config
