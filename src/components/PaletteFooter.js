import React from "react";
import { withStyles } from "@material-ui/styles";

const styles = {
  PaletteFooter: {
    backgroundColor: "white",
    height: "5vh",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: "2rem",
    fontWeight: "bold",
  },
  emoji: {
    marginTop: "-8px",
    padding: "0 0.4rem",
    fontSize: "1.5rem",
  },
};

function PaletteFooter(props) {
  const { paletteName, emoji, classes } = props;
  return (
    <footer className={classes.PaletteFooter}>
      {paletteName}
      <span className={classes.emoji}>{emoji}</span>
    </footer>
  );
}

export default withStyles(styles)(PaletteFooter);
