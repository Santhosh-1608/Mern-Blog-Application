/** @type {import('tailwindcss').Config} */
// import FlowbitePlugin from "flowbite/plugin"
import flowbite from "flowbite-react/tailwind"
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{js,jsx,ts,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(),
  ],
}