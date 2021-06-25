import bg from './bg.svg';

const styles = {
  root: {
    backgroundColor: "#394bad",
    backgroundImage: `url(${bg})`,
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& img": {
      width: "30px",
      height: "30px",
      padding: "5px",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        transform: "scale(1.2)",
      },
    },
    "& a": {
      transition: "all 0.4s ease-in-out",
      fontWeight: "500",
      backgroundColor: "transparent",
      borderRadius: "10px",
      border: "3px solid white",
      color: "white",
      padding: "8px",
      textDecoration: "none",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
        transform: "scale(1.06)",
      }
    }
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "5%",
  },
};

export default styles;