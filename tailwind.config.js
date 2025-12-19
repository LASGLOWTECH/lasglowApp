/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: [
  "./app/**/*.{js,jsx,ts,tsx}",      // This covers (tabs)
  "./components/**/*.{js,jsx,ts,tsx}"
],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
       
          primary: '#0056b3',    // Primary Brand Blue
          secondary: '#001f3f',    // Deep Navy for headers/text
          light: '#f8f9fa',   // Soft background gray
          accent: '#007bff',  // Bright blue for links/actions
          success: '#28a745', // For "Service Completed" status
          error: '#dc3545',   // For alerts/errors
        
      },
    },
  },
  plugins: [],
}