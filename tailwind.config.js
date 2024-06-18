/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./my_dash/pages/**/*.py", // scans all Python files in the pages directory
    "./my_dash/components/**/*.py", // scans all Python files in the components directory
    "./my_dash/app/**/*.py", // scans all Python files in the app directory
    "./my_dash/app.py", // scans all Python files in the lib directory
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
