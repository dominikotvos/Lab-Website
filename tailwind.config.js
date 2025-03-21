/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        primary: '#89b4fa',
        secondary: '#cba6f7',
        tertiary: '#74c7ec',
        success: '#a6e3a1',
        danger: '#f38ba8',
        error: '#f38ba8',
        background: '#181825',
        surface: '#1e1e2e',
        overlay: '#313244',
        text: '#cdd6f4'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    }
  },
  plugins: []
};
