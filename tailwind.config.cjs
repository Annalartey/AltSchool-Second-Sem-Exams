/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: [
     './**/*.html',
     './**/*.{js,jsx,ts,tsx,vue}',
   ],
  content: ["./src/**/*.{html,jxs}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
