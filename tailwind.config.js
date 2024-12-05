/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts}"],
  theme: {
    extend: {
      colors: {
        "dodgeroll-gold": {
          50: "#fff9eb",
          100: "#fdecc8",
          200: "#fbd88c",
          300: "#f9bd50",
          400: "#f79f1a",
          500: "#f1820f",
          600: "#d65f09",
          700: "#b13f0c",
          800: "#903210",
          900: "#762911",
          950: "#441204",
        },
        "apple-green": {
          50: "#edfff0",
          100: "#d5ffde",
          200: "#aeffbf",
          300: "#6eff8e",
          400: "#29ff54",
          500: "#00e92e",
          600: "#00c322",
          700: "#00981e",
          800: "#046e1b",
          900: "#06611b",
          950: "#00370b",
        },
        "dire-wolf": {
          50: "#f6f5f5",
          100: "#e7e6e6",
          200: "#d2cfd0",
          300: "#b2aeaf",
          400: "#8b8586",
          500: "#706a6b",
          600: "#605a5b",
          700: "#514d4d",
          800: "#474343",
          900: "#3e3b3b",
          950: "#292727",
        },    
      },
    },
    fontFamily: {
      Montserrat: "Montserrat, sans-serif",
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}

