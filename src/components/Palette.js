import React, { Component } from "react";
import "./Palette.css";

import ColorBox from "./ColorBox";
import Navbar from "./Navbar";

class Palette extends Component {
  state = {
    level: 500,
  };

  changeLevel = (level) => {
    this.setState({ level });
  };

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const colorBoxes = colors[level].map((color) => (
      <ColorBox background={color.hex} name={color.name} />
    ));
    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel}/>

        {/* Navbar goes here */}
        <div className="palette-colors">{colorBoxes}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
