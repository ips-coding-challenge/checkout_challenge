module.exports = {
  theme: {
    fontFamily: {
      display: ["Montserrat", "sans-serif"],
      body: ["Montserrat", "sans-serif"],
      sans: ["Montserrat", "sans-serif"],
    },
    extend: {
      colors: {
        gray1: "#333333",
        gray2: "#4F4F4F",
        gray3: "#828282",
        gray4: "#BDBDBD",
        gray5: "#E0E0E0",
        gray6: "#F2F2F2",
        orange: "#F2994A",
      },
      maxWidth: {
        container: "980px",
        50: "50%",
      },
      minWidth: {
        350: "350px",
      },
      borderRadius: {
        4: "4px",
        12: "12px",
      },
    },
  },
  variants: {
    margin: ["responsive", "hover", "first"],
  },
  plugins: [],
};
