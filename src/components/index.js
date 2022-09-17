import { styled } from "@stitches/react";

export const Section = styled("section", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  fontFamily: "Open Sans",
  padding: "5rem 0",

  variants: {
    color: {
      white: {
        backgroundColor: "white",
      },
      pink: {
        backgroundColor: "#fff6f6",
      },
      pinkDark: {
        backgroundColor: "#fce4ec",
      },
      pinkDarkest: {
        backgroundColor: "#f38ca4",
      },
    }
  }
});

export const Content = styled("div", {
  maxWidth: "970px",
});

export const Wrapper = styled("div", {
  margin: "1rem auto",

  variants: {
    size: {
      sm: {
        margin: "1.5rem auto",
      },
      md: {
        margin: "2.5rem auto",
      },
      lg: {
        margin: "3.5rem auto",
      }
    }
  }
});

export const Header = styled("h1", {
  fontFamily: "barkesville",
  fontSize: "3.5rem",
  color: "rgb(0, 0, 0)",
  paddingBottom: "2rem",

  variants: {
    font: {
        opensans: {
            fontFamily: "Open Sans",
        },
        barkesville: {
            fontFamily: "barkesville",
        },
        dancing: {
            fontFamily: "dancing",
        }
    },
    size: {
        md: {
            fontSize: "3.5rem",
        },
        lg: {
            fontSize: "5rem",
        }
    }
  }
});

export const Subheader = styled("h4", {
  fontFamily: "barkesville",
  fontSize: "1.5rem",
  color: "rgb(0, 0, 0)",
  paddingBottom: "1rem",
});

export const Paragraph = styled("p", {
  fontSize: "1.3rem",
  paddingBottom: "1rem",
});