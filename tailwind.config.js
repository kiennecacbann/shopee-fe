/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
    sm:'640px',
    md:'768px',
    lg:'1024px',
    xl:'1280px',
    '2xl': '1536px',
    },
    extend: {
      backgroundImage: {
        'login-background': "url('https://down-vn.img.susercontent.com/file/sg-11134004-7qvcu-ljmk3k30gzfvf7')",
        'product-background': "url('https://down-vn.img.susercontent.com/file/e8110c236c1ebc0edab92749b9173400')",
      }
    }
  },
  plugins: [],
}

