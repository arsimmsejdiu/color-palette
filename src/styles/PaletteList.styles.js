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
    "& a": {
      transition: "all 0.4s ease-in-out",
      color: "white",
      padding: "10px",
      "&:hover": {
        backgroundColor: "white",
        color: "black",
        borderRadius: "10px",
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