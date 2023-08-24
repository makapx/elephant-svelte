/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        elephant: {
          primary: '#a3e635',
          secondary: '#1d4ed8',
          accent: '#db2777',
          neutral: '#1f2937',
          'base-100': '#f3f4f6',
          info: '#5da1e9',
          success: '#30c089',
          warning: '#eca541',
          error: '#f73b41'
        }
      },
      {
        "elephant-dark": {
          primary: '#a3e635',
          secondary: '#1d4ed8',
          accent: '#db2777',
          neutral: '#293462',
          'base-100': '#03001C',
          info: '#5da1e9',
          success: '#30c089',
          warning: '#eca541',
          error: '#f73b41'
        }
      }
    ]
  }
};
