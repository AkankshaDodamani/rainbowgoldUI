const MediaQueries = {
  t: {
    query: "only screen and (min-width:420px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  ts: {
    query: "only screen and (min-width: 320px) and (max-width: 576px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  s: {
    query: "only screen and (min-width:576px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },

  m: {
    query: "only screen and (min-width:768px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  mtl: {
    query: "only screen and (min-width:768px) and (max-width:991px) ",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  l: {
    query: "only screen and (min-width:992px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  xl: {
    query: "only screen and (min-width:1200px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
  xxl: {
    query: "only screen and (min-width:1400px)",
    sizes: {
      NavbarLogo: "22.4px",
      TitleText: "20.8px",
      subTitleText: "16px",
    },
  },
};
const Fonts = {
  Quicksand: `'Quicksand', system-ui`,
  Poppins: `'Poppins', sans-serif`,
  Inter: `'Inter', system-ui`,
  Roboto: `'Roboto', system-ui`,
};
export const Theme = {
  Colors: {
    GreenBoxShadow:
      "0px 70px 180px rgba(50,188,173, 0.14), 0px 28px 66px rgba(50,188,173, 0.098), 0px 13px 32px rgba(50,188,173, 0.08)",
    BoxShadow:
      "0px 12px rgba(0, 0, 0, 0.06), 0px 17.1113px 34.9987px rgba(0, 0, 0, 0.0279534), 0px 9.4682px 3.4133px rgba(0, 0, 0, 0.00917414)",
    Boxes: "#2ca09d",
    LabelColor: "#32bcad",
    HeadingColor: "#008274",
    BlueColor: "#194b6c",
    LightBlueColor: "#b6d9f0",
    LightGrey: "#CCCCCC",
    SaveButton: "#FFA500",
    WhiteBg: "#F3F4FD",
    White: "#FFFFFF",
    NavbarBg: "linear-gradient(to left, #194b6c, #008274, #2ca09d)",
  },
  MediaQueries: MediaQueries,
  Fonts: Fonts,
};