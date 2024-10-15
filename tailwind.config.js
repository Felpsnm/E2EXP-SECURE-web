/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        cisco_skyblue: '#00BCEB',
        cisco_midnightblue: '#0D274D',
        cisco_mediumblue: '#0051AF',
        cisco_green: '#74BF4B',
        cisco_orange: '#FBAB2C',
        cisco_red: '#E3241B',
        cisco_darkgray: '#414344',
        cisco_lightgray: '#E2E2E2',
      },
      fontFamily: {
        'sans': ['CiscoSansTT']
      },
    },
  },
  plugins: [],
}

