const styles = {
  Navbar: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "5vh",
  },
  logo: {
    marginRight: "15px",
    padding: "0 13px",
    fontSize: "22px",
    backgroundColor: "#eceff1",
    fontFamily: "Roboto",
    height: "100%",
    display: "flex",
    alignItems: "center",
    "&:hover": {
      backgroundColor: "lightblue",
    },
    "& a": {
      textDecoration: "none",
      color: "black",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.06)",
      },
    },
  },
  slider: {
    width: "340px",
    margin: "0 10px",
    display: "inline-block",
    "& .rc-slider-rail": {
      height: "8px",
    },
    "& .rc-slider-handle,.rc-slider-handle:active,.rc-slider-handle:hover,.rc-slider-handle:focus":
      {
        backgroundColor: "green",
        outline: "none",
        border: "2px solid green",
        boxShadow: "none",
        width: 13,
        height: 13,
        marginLeft: "-7px",
        marginTop: "-3px",
      },
    "& .rc-slider-track": {
      backgroundColor: "transparent",
    },
  },
  selectContainer: {
    marginLeft: "auto",
    marginRight: "1rem",
  },
};

export default styles;
